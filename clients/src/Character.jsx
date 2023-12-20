import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GiAbdominalArmor } from "react-icons/gi"
import { IoShieldSharp } from "react-icons/io5";
import { GiHealthNormal } from "react-icons/gi";
import { MdOutlineSummarize } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidUserRectangle } from "react-icons/bi";

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


    return (
        <>
            {loading ? (
                <div>
                    <div className="bg-[#DDF2FD]">
                        {/* Content01 */}
                        {data && (
                            <div className="flex flex-row bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://blizzardwatch.com/wp-content/uploads/2018/10/cg-8a.jpg)' }}>
                                <div className="ml-32 pt-10 ">
                                    <h1 className="text-white text-[50px] font-bold ">{data.name}</h1>
                                    <div className="flex flex-row gap-3">
                                        <p className="text-white text-[20px] w-6/12 mt-3 font-semibold">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{data.description}</p>
                                    </div>
                                    <div className="flex flex-col justify-start gap-3">
                                        <div className="flex flex-row gap-3">
                                            <BiSolidUserRectangle className="text-white text-[30px] mt-5" />
                                            <p className="text-white text-[20px] mt-5 font-semibold">Role: {data.role}</p>
                                        </div>
                                        <div className="flex flex-row gap-3">
                                            <FaLocationDot className="text-white text-[30px] mt-2" />
                                            <p className="text-white text-[20px] mt-2 font-semibold">Location: {data.location}</p>
                                        </div>
                                        <div className="">
                                            <h2 className="text-white text-[20px] font-semibold mt-5">Hitpoints</h2>
                                            <div className="flex flex-row items-center">
                                                <GiAbdominalArmor className="text-white text-[30px] m-3" />
                                                <p className="text-white text-[20px] m-3">Armor : {data.hitpoints.armor}</p>
                                            </div>
                                            <div className="flex flex-row items-center">
                                                <IoShieldSharp className="text-white text-[30px] m-3" />
                                                <p className="text-white text-[20px] m-3">Shields : {data.hitpoints.shields}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <GiHealthNormal className="text-white text-[30px] m-3" />
                                                <p className="text-white text-[20px] m-3">Health : {data.hitpoints.health}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <MdOutlineSummarize className="text-white text-[30px] m-3" />
                                                <p className="text-white text-[20px] m-3">Total : {data.hitpoints.total}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-20">
                                    <img src={data.portrait} className="" alt={data.portrait} width="500px" />
                                </div>


                            </div>


                        )}

                        {/* Content02 */}
                        <div>
                            <div className="flex flex-wrap justify-center py-5">


                            {data.abilities.map((ability, index) => (
                                <div key={index} className="m-4 text-center bg-white rounded-md p-4 shadow-md">
                                    <div className="w-24 h-24 mx-auto mb-3">
                                    <img src={ability.icon} className="rounded-full bg-slate-300" alt={ability.name} width="100px" />
                                    </div>
                                    <p className="text-lg font-semibold mb-2">{ability.name}</p>
                                    <div className="mb-3">
                                    <p className="text-md bg-white rounded-md p-2">&nbsp; &nbsp;&nbsp;{ability.description}</p>
                                    </div>
                                    {/* Uncomment the line below if you have a video thumbnail */}
                                    {/* <img src={ability.video.thumbnail} alt="Video Thumbnail" /> */}
                                </div>
                                ))}


                            </div>
                        </div>
                    </div>
                    <div className="flex   py-5 ">
                        {data.abilities.map((ability, index) => {
                            return (
                                <div className="flex hover:scale-110 transition duration-50 hover:shadow-2xl">
                                    <video autoPlay muted loop src={ability.video.link.mp4} className="" width="1000px"></video>
                                    {/* <div>{AbilitiesDetails}</div> */}
                                </div>
                            )
                        })}
                    </div>
                    <div className="bg-[#405275] ">
                        <div className="text-center pt-16">
                            <h1 className="text-[40px] text-white font-semibold">ORIGIN STORY</h1>
                            {data && (
                                <div>
                                    <p className="text-[20px] text-white mx-16 pt-5" >{data.story.summary}</p>
                                </div>
                            )}
                        </div>
                        {/* Content03 */}

                        <div className="flex justify-center pt-5 mb-24">
                            {data && data.story && data.story.media && data.story.media.link && (
                                <div className="">
                                    {(() => {
                                        const originalLink = data.story.media.link;
                                        const videoId = originalLink.split('/').pop();
                                        const embedLink = `https://www.youtube.com/embed/${videoId}`;

                                        return (
                                            <iframe
                                                width="600"
                                                height="355"
                                                src={embedLink} className="pt-5"
                                                allowFullScreen
                                            ></iframe>
                                        );
                                    })()}
                                </div>
                            )}
                        </div>
                        <div className="bg-[#DDF2FD]">
                            <div className="flex justify-center py-5 ">
                                <h1 className="bg-[#D9D9D9] px-40 text-4xl py-4 font-semibold">Overviews</h1>
                            </div>
                            <div className="flex justify-center gap-5 py-5">
                                {data.story.chapters.map((chapter, index) => {
                                    return (
                                        <div key={index} className="">
                                            <img src={chapter.picture} className="" alt={chapter.picture} width="500px" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>


                    </div>
                </div>) : (<div className="flex justify-items-center justify-center h-screen"><span className="loading loading-bars loading-xs "></span>
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                    <span className="loading loading-bars loading-lg"></span></div>)
            }
            
        </>
    )
};

export default Character;

