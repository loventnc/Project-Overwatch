import { Link } from 'react-router-dom'
import Tank from "../src/image/Tank.png";
import DPS from "../src/image/DPS.png";
import Support from "../src/image/Support.png";
import { HsDamage } from "./HsDamage.js";

const HeroesDamage = () => {
console.log(HsDamage);

  return (
    <>
    {/* Hearder */}
    <div className='bg-cover bg-center bg-BGHeader h-[660px]'>
      <div className="ml-32 pt-72">
        <h1 className='text-white text-[50px] font-semibold '>HEROES</h1>
      </div>
    </div>
    {/* roles */}
    <div className='bg-[#DDF2FD] '>
      <div className='flex flex-col items-center pt-10'>
        <div className='flex flex-row gap-10'>
          <div className='flex flex-row justify-center bg-white h-[40px] w-[150px] font-semibold rounded-md hover:scale-110 transition duration-50 hover:shadow-xl'>
            <img src={Tank} className="" alt="" width="40px" />
            <h1 className='text-[22px] pt-1 pl-2 '>
              <Link to='/HeroesTank'>
                TANKS
              </Link>
            </h1>
          </div>
          <div className='flex flex-row justify-center bg-white h-[40px] w-[160px] font-semibold rounded-md hover:scale-110 transition duration-50 hover:shadow-xl'>
            <img src={DPS} className="" alt="" width="40px" />
            <h1 className='text-[22px] pt-1 pl-2'>
              <Link to='/HeroesDamage'>
                DAMAGE
              </Link>
            </h1>
          </div>
          <div className='flex flex-row justify-center bg-white h-[40px] w-[170px] font-semibold rounded-md hover:scale-110 transition duration-50 hover:shadow-xl'>
            <img src={Support} className="" alt="" width="40px" />
            <h1 className='text-[22px] pt-1 pl-2'>
              <Link to='/HeroesSupport'>
                SUPPORT
              </Link>
            </h1>
          </div>
        </div>
        <div className='pt-10'>
          <h4 className='flex justify-center text-center text-[18px]'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Damage heroes seek out, engage, and obliterate the enemy with wide-ranging tools, abilities, and play styles. Fearsome but fragile, these heroes require backup to survive.</h4>
        </div>
      </div>

      {/* Content */}
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-6 gap-14 p-10'>
          {HsDamage.map((hero, index) => (
            <div key={index} className='bg-white h-[220px] w-[180px] rounded-none text-center border-4 border-white hover:scale-110 transition duration-50 hover:shadow-2xl'>
              <a href={`/heroes/${(hero.name.toLowerCase()).replace(" ", "-").replace(".", "").replace("ö", "o")}`}>
                <img src={hero.img} className="flex justify-center items-center bg-black" alt={hero.name} width="180px" />
                <h1 className='flex justify-center items-center pt-2 text-[18px] font-medium'>{hero.name}</h1>
              </a>
            </div>
          ))}
        </div>
      </div>
      

    </div>
    </>
    
  )
}

export default HeroesDamage