import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MapDetails = () => {
    const [data, setData] = useState(null);
    const { detail } = useParams();
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://overfast-api.tekrop.fr/maps`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, []); 

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    
    // ...
    
    const detailMap = data && data.find((map) => map.name === capitalize(detail));
    console.log(detailMap);

    return (
        <>
            {loading ? (
                <div>(<div className="flex justify-items-center justify-center h-screen"><span className="loading loading-bars loading-xs "></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span></div>)</div>
            ) : (
                <div>
                    {detailMap ? (
                    
                        <>
                            <div className="bg-[#DDF2FD] ">
                                <div className="flex flex-col justify-center items-center">
                                    <h2 className=" text-[50px] font-bold ">{detailMap.name}</h2>
                                    <img src = {detailMap.screenshot} className=""></img>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div>Map not found</div>
                    )}
                </div>
            )}
        </>
    );
};

export default MapDetails;
