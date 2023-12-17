import { Link } from 'react-router-dom'
import Tank from "../src/image/Tank.png";
import DPS from "../src/image/DPS.png";
import Support from "../src/image/Support.png";
import { HsSupport } from './HsSupport.js';

const HeroesSupport = () => {
console.log(HsSupport);

  return (
    <>
    {/* Hearder */}
    <div className='bg-cover bg-center bg-BGHeader h-[660px]'>
      <div className="ml-32 pt-72">
        <h1 className='text-white text-[50px] font-semibold '>HEROES</h1>
      </div>
    </div>
    {/* roles */}
    <div className='bg-[#DDF2FD]'>
      <div className='flex flex-col items-center pt-10'>
        <div className='flex flex-row gap-10'>
          <div className='flex flex-row justify-center bg-white h-[40px] w-[130px] font-semibold'>
            <img src={Tank} className="" alt="" width="40px" />
            <h1 className='text-[22px] pt-1 pl-2'>
              <Link to='/HeroesTank'>
                TANKS
              </Link>
            </h1>
          </div>
          <div className='flex flex-row justify-center bg-white h-[40px] w-[150px] font-semibold'>
            <img src={DPS} className="" alt="" width="40px" />
            <h1 className='text-[22px] pt-1 pl-2'>
              <Link to='/HeroesDamage'>
                DAMAGE
              </Link>
            </h1>
          </div>
          <div className='flex flex-row justify-center bg-white h-[40px] w-[160px] font-semibold'>
            <img src={Support} className="" alt="" width="40px" />
            <h1 className='text-[22px] pt-1 pl-2'>
              <Link to='/HeroesSupport'>
                SUPPORT
              </Link>
            </h1>
          </div>
        </div>
        <div className='pt-10'>
          <h4 className='flex justify-center text-center text-[18px]'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Overwatch features an international cast of powerful heroes with captivating personalities and backstories. Explore the full roster below.</h4>
        </div>
      </div>

      {/* Content */}
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-6 gap-14 p-10'>
          {HsSupport.map((hero, index) => (
            <div key={index} className='bg-white h-[220px] w-[180px] rounded-none text-center border-4 border-white'>
              <a href={`/heroes/${hero.name.toLowerCase()}`}>
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

export default HeroesSupport