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
        <div>
            <form onSubmit={login} className='flex justify-center'>
                <input type="text" 
                placeholder="Username" 
                value={username} 
                onChange={ev => setUsername(ev.target.value)}/>
                
                <input type="password" 
                placeholder="Password" 
                value={password} 
                onChange={ev => setPassword(ev.target.value)}/>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}