import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { TiPen } from "react-icons/ti";
import { FaMapPin } from "react-icons/fa";

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
    function capitalizeEachWord(str) {
        return str.replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      }
    
    const detailMap = data && data.find((map) => map.name === capitalizeEachWord(detail));
    console.log(detail.replaceAll("-", " "));

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
                                    <div className="flex flex-row justify-center gap-2 ">
                                        <FaMapPin className="text-[40px]"/>
                                        <div className="flex flex-col justify-center items-center rounded-md bg-white p-3" >
                                            <h3 className="text-[22px] ">Gamemodes : {detailMap.gamemodes}</h3>
                                            <h4 className="text-[22px] ">Location : {detailMap.location}</h4>
                                            <h5 className="text-[22px] ">Country : {detailMap.country_code}</h5>
                                        </div>
                                        <FaMapPin className="text-[40px]"/>
                                    </div>
                                    <img src = {detailMap.screenshot} className="pt-5" width="800px"></img>
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
