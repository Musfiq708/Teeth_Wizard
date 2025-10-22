import React, { useContext } from 'react'
import { authContext } from '../AuthProvoder/AuthProvider'
import { NavLink } from 'react-router-dom';

export default function SignIn() {
  const { handleGoogleLogin, handleSignIn } = useContext(authContext);

  const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log( email, password);
        handleSignIn(email, password);
    }

  console.log(handleGoogleLogin)
  return (

    <div>
      <div>
        <h1 className='text-center mt-8 text-3xl font-bold'>Sign In</h1>
        <form onSubmit={handleSubmit} action="">
          <div class="card bg-base-100 w-full max-w-sm shrink-0 border border-blue-400 mt-10 mx-auto">
            <div class="card-body">
              <fieldset class="fieldset">
                <label class="label">Email</label>
                <input name='email' type="email" class="input" placeholder="Email" />
                <label class="label">Password</label>
                <input name='password' type="password" class="input" placeholder="Password" required />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-primary hover:bg-blue-600 hover:border-white hover:font-bold  w-full mt-4">Sign Up</button>
              </fieldset>
            </div>
          </div>
        </form>
        <NavLink to="/signUp" className="block text-center mt-5">Dont have an Account ?? <span className='text-red-500 hover:text-blue-500'>Sign Up Now</span></NavLink>
        <div className='text-center'>
          <h3 className='text-xl font-semibold'>Or</h3>
          <h1>Login With <span className='text-blue-400 font-bold'>Google</span></h1>
          <button onClick={handleGoogleLogin} className='btn btn-primary hover:bg-blue-600 hover:border-white hover:font-bold  mt-4'>Google</button>
        </div>
      </div>
    </div>
  )
}
