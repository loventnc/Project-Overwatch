import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Character = () => {
    const [data, setData] = useState(null);
    const { name } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://overfast-api.tekrop.fr/heroes/${name}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

    fetchData();
}, [name]);

    console.log(data);

    return (
        <>
        {/* Content01 */}
        <div>
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
        </div>
        
        {/* Content02 */}
        <div className="bg-cover bg-center bg-[#405275] h-screen ">
            <div className="flex justify-end pr-40 pt-20">
                <h1 className="text-white text-[40px] font-semibold">ABILITIES</h1>
                <p>{data.abilities.name}</p>
            </div>
        </div>
        </>
    );
};

export default Character;
