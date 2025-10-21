import React, { useContext } from 'react'
import { authContext } from '../AuthProvoder/AuthProvider'
import { NavLink } from 'react-router-dom';

export default function SignIn() {
  const {handleGoogleLogin} = useContext(authContext);
  console.log(handleGoogleLogin)
  return (
    <div>
      <button onClick={handleGoogleLogin} className='btn btn-primary block mx-auto'>Google</button>
      <NavLink to="/signUp" className="block text-center my-5">Dont have an Account ?? <span className='text-red-500 hover:text-blue-500'>Sign Up Now</span></NavLink>
    </div>
  )
}
