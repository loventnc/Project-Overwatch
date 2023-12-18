// API_NOTI

export const API_NOTIFICATION_MESSAGE = {
    loading:{
        title: 'Loading',
        message: 'Data is loading'
    },
    success: {
        title: 'Success',
        message: 'Data success loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'Error while loading data'
    },
    requestFailure: {
        title: 'Error',
        message: 'Error while requesting data'
    },
    networkError: {
        title: 'Error',
        message: 'Network error'
    }
}

//API SERviCE CALL
//Sample req
// NEED SERVICE CALL:{url: '/', method: 'GET'}
export const SERVICE_URLS = {
    userSignup: {url: '/signup', method: 'POST'}
}