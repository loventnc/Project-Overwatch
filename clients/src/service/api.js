import axios from 'axios';
import { response } from 'express';
import { API_NOTIFICATION_MESSAGE, SERVICE_URLS } from '../Components/constants/config';



const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})

axiosInstance.interceptors.request.use(
    function (config){
        return config;
    },
    function (error){
        return Promise.reject(processError(error));
    }
);

axiosInstance.interceptors.response.use(
    function (response){
        return processResponse(response);
    },
    function (error){
        return Promise.reject(processError(response));
    }
);
// Success = {isSuccess: true, data: obj}
// Fail = {isFail: true, status:string, message:string}

const processResponse = () => {
    if (response?.status === 200){
        return {
            isSuccess: true, 
            data: response.data
        };


    }else{
        return {
            isFail: true, 
            status: response?.status, 
            msg: response?.msg,
            code: response?.code
        };
    }
}



// Success = {isSuccess: true, data: obj}
// Fail = {isFail: true, status:string, message:string}
const processError = (error) => {
    if(error.response) {
        // Request made and server responded
        console.log('ERROR IN res : ',error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGE.responseFailure,
            code: error.response.status
        }

    } else if (error.request) {
        // The request was made but no request was received
        console.log('ERROR IN req : ',error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGE.requestFailure,
            code: ""
        }
    } else {
        // error
        console.log('ERROR IN NERWORK : ',error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGE.networkError,
            code: ""
        }
    }
}

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) => 
        axiosInstance({
            method: value.method,
            url: value.url,
            data:body,
            responseType: value.responseType,
            onUploadProgress: function(progressEvent){
                if(showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress: function(progressEvent){
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentageCompleted);
                }
            }
        })
}

export { API };