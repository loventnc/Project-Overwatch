import { Link } from 'react-router-dom'
import Tank from "../src/image/Tank.png";
import DPS from "../src/image/DPS.png";
import Support from "../src/image/Support.png";
import Ashelogo from "../src/image/Ashelogo.png";


const Heroes = () => {


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
            <h1 className='text-[22px] pt-1 pl-2'>TANKS</h1>
          </div>
          <div className='flex flex-row justify-center bg-white h-[40px] w-[150px] font-semibold'>
            <img src={DPS} className="" alt="" width="40px" />
            <h1 className='text-[22px] pt-1 pl-2'>DAMAGE</h1>
          </div>
          <div className='flex flex-row justify-center bg-white h-[40px] w-[160px] font-semibold'>
            <img src={Support} className="" alt="" width="40px" />
            <h1 className='text-[22px] pt-1 pl-2'>SUPPORT</h1>
          </div>
        </div>
        <div className='pt-10'>
          <h4 className='flex justify-center text-center text-[18px]'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Overwatch features an international cast of powerful heroes with captivating personalities and backstories. Explore the full roster below.</h4>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-16 p-10 w-full'>
        <div className='bg-white h-[220px] w-[180px] rounded-none'>
            <img src={Ashelogo} className="flex justify-center items-center" alt="" width="180px" />
            <h1 className='flex justify-center items-center pt-2 text-[18px] font-medium'>ASHE</h1>
        </div>
        <div className='bg-white h-[220px] w-[180px] rounded-none'>
            <img src={Ashelogo} className="flex justify-center items-center" alt="" width="180px" />
            <h1 className='flex justify-center items-center pt-2 text-[18px] font-medium'>ASHE</h1>
        </div>
        <div className='bg-white h-[220px] w-[180px] rounded-none'>
            <img src={Ashelogo} className="flex justify-center items-center" alt="" width="180px" />
            <h1 className='flex justify-center items-center pt-2 text-[18px] font-medium'>ASHE</h1>
        </div>
        <div className='bg-white h-[220px] w-[180px] rounded-none'>
            <img src={Ashelogo} className="flex justify-center items-center" alt="" width="180px" />
            <h1 className='flex justify-center items-center pt-2 text-[18px] font-medium'>ASHE</h1>
        </div>
        <div className='bg-white h-[220px] w-[180px] rounded-none'>
            <img src={Ashelogo} className="flex justify-center items-center" alt="" width="180px" />
            <h1 className='flex justify-center items-center pt-2 text-[18px] font-medium'>ASHE</h1>
        </div>
        <div className='bg-white h-[220px] w-[180px] rounded-none'>
            <img src={Ashelogo} className="flex justify-center items-center" alt="" width="180px" />
            <h1 className='flex justify-center items-center pt-2 text-[18px] font-medium'>ASHE</h1>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Heroes