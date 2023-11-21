import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SignupPic from "../src/image/Register.jpg"


function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
            .then(result => {console.log(result)
            navigate('/login')
            })
            .catch(err=> console.log(err))
    }
    return(
        <div className='flex  justify-content-center w-full h-screen'>
            <div className='bg-white w-[40%]'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor='email'>
                        <strong>Name</strong>
                    </label>
                    <input 
                        type='text'
                        placeholder='Enter Name'
                        autoComplete='off'
                        name='name'
                        className='form-control rounded-0'
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className="">
                    <label htmlFor='email'>
                        <strong>Email</strong>
                    </label>
                    <input
                        type='email'
                        placeholder='Enter Email'
                        autoComplete='off'
                        name='email'
                        className='form-control rounded-0'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="">
                    <label htmlFor='email'>
                        <strong>Password</strong>
                    </label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        autoComplete='off'
                        name='password'
                        className='form-control rounded-0'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className='btn btn-default w-100rounded-0'>
                    Register
                </button>
                </form>
                <Link to="/login" className=''>
                    <p>Already Have an Account?</p>
                </Link>
            </div>
            <div className='bg-gray w-[60%] h-full'>
                <img src={SignupPic} className="object-cover h-full"/>
            </div>
        </div>

    )
}

export default Signup