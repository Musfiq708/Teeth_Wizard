import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { authContext } from '../AuthProvoder/AuthProvider';

export default function SignUp() {
    const { handleSignUp } = useContext(authContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photourl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);
        handleSignUp(email, password);
        navigate('/signIn');
    }
    return (
        <div>
            <h1 className='text-center mt-8 text-3xl font-bold'>Register Sign Up</h1>
            <form onSubmit={handleSubmit} action="">
                <div class="card bg-base-100 w-full max-w-sm shrink-0 border border-blue-400 mt-10 mx-auto">
                    <div class="card-body">
                        <fieldset class="fieldset">
                            <label class="label">Name</label>
                            <input name='name' type="text" class="input" placeholder="Full Name" />
                            <label class="label">Photo URL</label>
                            <input name='photourl' type="text" class="input" placeholder="Enter Photo URL" />
                            <label class="label">Email</label>
                            <input name='email' type="email" class="input" placeholder="Email" />
                            <label class="label">Password</label>
                            <input name='password' type="password" class="input" placeholder="Password" required />

                            <button className="btn btn-primary hover:bg-blue-600 hover:border-white hover:font-bold  w-full mt-4">Sign Up</button>
                        </fieldset>
                    </div>
                </div>
            </form>
            <NavLink to="/signIn" className="block text-center my-2">Already have an Account ?? <span className='text-red-500 hover:text-blue-500'>Sign In </span></NavLink>
        </div>

    )
}
