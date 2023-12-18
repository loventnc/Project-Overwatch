import React from 'react';
import CustomButton from '../CustomButton';
import { useState } from 'react';
import { API } from '../../service/api';

const signupInitialValues = {
  name: '',
  username: '',
  password: ''
  
}


const Login = () => {
  const [account, toggleAccount] = useState('login');
  const [signup, setSignup] = useState(signupInitialValues);

  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  }

  const onInputChange = (e) => {
    setSignup({...signup, [e.target.name]: e.target.value});
  }

  const signupUser = async () => {
    let responce = await API.userSignup(signup);
  }

  return (
    <div>
      {
        account === 'login' ?
          <div className='w-400 bg-white m-auto'>
            <input variant="standard" label="Enter Userame" name='username'onChange={(e) => onInputChange(e)} className='flex'/>
            <input variant="standard" label="Enter Password" name='password'onChange={(e) => onInputChange(e)}/>
            <CustomButton title="Login"/>
            <CustomButton title="Create an account" onClick={() => toggleSignup()}/>
          </div>
        :
          <div className='w-400 bg-white m-auto'>
            <input variant="standard" label="Enter Name" name='name'onChange={(e) => onInputChange(e)}/>
            <input variant="standard" label="Enter Userame" name='username'onChange={(e) => onInputChange(e)}/>
            <input variant="standard" label="Enter Password" name='password'onChange={(e) => onInputChange(e)}/>
            <button 
              className={`flex items-center justify-center px-4 py-2 rounded-md bg-primary text-white`} 
              onClick={() => signupUser()}
            />
            <CustomButton title="Already have an Account" onClick={() => toggleSignup()}/>
          </div>
      }
    </div>
  )
}

export default Login;
