import { Link } from 'react-router-dom'

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
    <div>
      <div>
        <h2 className='flex justify-center text-center text-[18px]'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Overwatch features an international cast of powerful heroes with captivating personalities and backstories. Explore the full roster below.</h2>
      </div>
    </div>
    </>
    
  )
}

export default Heroes