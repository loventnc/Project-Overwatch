import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'

function Signup(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <div className='bg-gray w-full h-screen'>
          <div className="flex h-4/6 relative bg-cover bg-center bg-Bgheroes bg-white justify-end">
            <img className="object-contain" src="https://media.discordapp.net/attachments/1164742335322656818/1185963348580388884/Ana_portrait2.webp?ex=65918570&is=657f1070&hm=f5cd70060af9d7de5df16b78ce24583a682c32b23c99f2ac8f6ee1c63e8418e5&=&format=webp&width=957&height=936" alt="Image 1" />
          </div>
          <div>
            Hellow
          </div>
        </div>
      


        // <div className='flex  justify-content-center w-full h-screen'>
        //      <div className='bg-white w-[40%]'>
                
        //      </div>
        //      <div className='bg-gray w-[60%] h-full'>
        //          <img src="https://images-ext-1.discordapp.net/external/VcbplOIjZpFIwuszyFKUTK-4qjPaKA-SPVkCnub82d8/https/images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt49f84cd5568be8e4/631a8bab1566e20e82f3028c/960_Ana.jpg?format=webp">
        //     </div>
        // </div>
    )
}

export default Signup