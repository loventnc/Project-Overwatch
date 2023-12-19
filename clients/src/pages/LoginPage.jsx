import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    async function login(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })
        if(response.ok){
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            })
            setRedirect(true);
        }else{
            alert('Login Failed');
        }

    }

    if (redirect) {
        return <Navigate to={'/community'} />;
    }
    return (
        <div className='flex justify-center w-screen h-screen'>
            <div className='flex justify-center w-2/4 items-center '>
                <form onSubmit={login} className='block'>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text" onChange={ev => setUsername(ev.target.value)}>USERNAME</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text" onChange={ev => setPassword(ev.target.value)}>PASSWORD</span>
                    </div>
                </label>

                
                    
                    

                    <button type="submit" className='btn glass '>Login</button>
                </form>
            </div>


            <div className='w-2/4'>
                <img src="https://i.imgur.com/5Qg1j1z.png" alt="" className='w-full h-full'/>
            </div>
        </div>
    )
}