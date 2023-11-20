import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'

function Signup(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return(
        <div className='grid grid-cols-2 grid-rows-1 justify-content-center w-full h-screen '>
            <div className='bg-black w-1/3' p-4 m-0>Register</div>
            <div className='bg-white w-2/3' p-4 m-0>1111111</div>
        </div>
    )
}

export default Signup