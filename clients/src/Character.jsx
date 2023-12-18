import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Character = () => {
    const [data, setData] = useState(null);
    const { name } = useParams();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://overfast-api.tekrop.fr/heroes/${name}`);
                setData(response.data);
                setLoading(true);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

    fetchData();
}, [name]);

    console.log(data); 
    


    return (
        
        <>
        {loading ? <div>
            <div className="bg-[#DDF2FD]">
                {/* Content01 */}
                {data && (
                        <div className="flex flex-row bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://blizzardwatch.com/wp-content/uploads/2018/10/cg-8a.jpg)' }}>
                            <div className="ml-32 pt-20">
                                    <h1 className="text-white text-[50px] font-bold ">{data.name}</h1>
                                    <p className="text-white text-[20px] w-6/12 mt-3 font-semibold">{data.description}</p>
                                <div className="flex flex-col justify-start">
                                    <p className="text-white text-[20px] mt-5 font-semibold">Role: {data.role}</p>
                                    <p className="text-white text-[20px] mt-5 font-semibold">Location: {data.location}</p>
                                    <div>
                                        <h2 className="text-white text-[20px] font-semibold mt-5">Hitpoints</h2>
                                        <p className="text-white text-[20px] m-5">Armor : {data.hitpoints.armor}</p>
                                        <p className="text-white text-[20px] m-5">Shields : {data.hitpoints.shields}</p>
                                        <p className="text-white text-[20px] m-5">Health : {data.hitpoints.health}</p>
                                        <p className="text-white text-[20px] m-5">Total : {data.hitpoints.total}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-20">
                                <img src={data.portrait} className="" alt={data.portrait} width="500px"  />
                            </div>
                            
                            
                        </div>
                        
                        
                )}
                
                {/* Content02 */}
                <div className="flex h-full  py-5 ">
                {data.abilities.map((ability, index) => {
                return (
                    <div key={index} className="mx-auto justify-center " >
                        <div className="w-25 h-24 flex flex-row justify-center mt-4  " >
                            <img src={ability.icon} className="bg-neutral-300 rounded-full"  width="100px"></img>
                            <p className=" text-[22px]  font-semibold mt-8">{ability.name}</p>
                            
                            
                        </div>
                        <div className="mb-28 mt-5 mx-9">
                                <p className=" text-[20px] bg-white rounded-md text-center">{ability.description}</p>
                        </div>
                        {/* <img src={ability.video.thumbnail}></img> */}
                        <div className="flex">
                        <video autoPlay muted loop src={ability.video.link.mp4} className="" width="1000px"></video>
                        </div>
            
                        
                    </div>
                )
                })}

                </div>
                
            <div className="bg-[#405275]">
            <div className="text-center">
                <h1 className="text-[40px] text-white">ORIGIN STORY</h1>
                {data &&(
                <div>
                    <p  className="text-[24px] text-white mx-16" >{data.story.summary}</p>
                </div>
            )}
            </div>
            {/* Content03 */}
            
            <div className="flex justify-center p-4">
            {data && data.story && data.story.media && data.story.media.link && (
                    <div className="">
                        {(() => {
                        const originalLink = data.story.media.link;
                        const videoId = originalLink.split('/').pop();
                        const embedLink = `https://www.youtube.com/embed/${videoId}`;

                        return (
                            <iframe
                            width="560"
                            height="315"
                            src={embedLink}
                            allowFullScreen
                            ></iframe>
                        );
                        })()}
                    </div>
                    )}

            </div>

            </div>
            
            
            <div className="flex justify-center py-5 ">
                <h1 className="bg-[#D9D9D9] px-40 text-4xl py-4">Overviews</h1>
            </div>        
            <div className="flex justify-center gap-5 py-5">
            {data.story.chapters.map((chapter, index) => {
                return (
                    <div key={index} className="">
                        <img src={chapter.picture} className="" alt={chapter.picture} width="500px"  />
                    </div>
                )
            })}

            </div>
            
                
            
            </div>
        </div>:(<div>loading...</div>)}
        </>
    );
};

export default Character;
