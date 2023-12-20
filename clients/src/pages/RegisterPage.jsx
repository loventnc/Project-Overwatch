import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json',},
        });
        if (response.status === 200) {
            alert(' Registration Successful')
        }else{
            alert('Registration Failed')
        }
    }
    return (
        // <div>
        //     <form action="" onSubmit={register}>
        //         <input type="text" 
        //         placeholder="Username" 
        //         value={username} 
        //         onChange={ev => setUsername(ev.target.value)}/>

        //         <input type="password" 
        //         placeholder="Password" 
        //         value={password} 
        //         onChange={ev => setPassword(ev.target.value)}
        //         />
        //         <button type="submit">Register</button>
        //     </form>
            
        // </div>

    <div className="flex items-center justify-center h-screen bg-cover bg-center bg-BGLogin">

        <div className="flex w-full max-w-screen-xl bg-white rounded-lg shadow-lg overflow-hidden">

            <form onSubmit={register} className="w-full md:w-1/2 p-8 md:p-12">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Register an Account</h1>
            </div>

            <label className="mb-4 block">
                <span className="text-gray-700 font-semibold">USERNAME</span>
                <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full mt-1"
                onChange={(ev) => setUsername(ev.target.value)}
                />
            </label>

            <label className="mb-4 block">
                <span className="text-gray-700 font-semibold">PASSWORD</span>
                
                    <input
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered w-full mt-1"
                    onChange={(ev) => setPassword(ev.target.value)}
                    />
                
            </label>
           
            <button type="submit" className="btn btn-primary w-full mt-6">
                Register
            </button>
            <span className="text-gray-700">Already have an account?</span>{' '}
                <Link to="/community/login" className="text-blue-500 font-semibold hover:underline">
                    Login here
                </Link>
            </form>
            

            <div className="hidden md:block md:w-1/2 relative">
            <img
                src="https://media.discordapp.net/attachments/1185980293648232581/1186761067234349057/1285384.png?ex=65946c5f&is=6581f75f&hm=10eafa405076e38e4050242660e47eef0eecbd9e2d00e0696b26ac7f806e511d&=&format=webp&quality=lossless&width=1572&height=884"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover rounded-l-lg"
            />
            </div>

        </div>

    </div>
    )
}