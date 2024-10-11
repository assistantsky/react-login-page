import React, { useState } from 'react';
import './LoginRegister.css';
import { RiUserShared2Fill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";



const LoginRegister = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction('active');
    };

    const loginLink = () => {
        setAction('');
    };

    return (
        <div className={`wrapper${action}`}>
            <div className='form-box login'>
                <form actions="">
                    <h1>login</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Username' required />
                        <RiUserShared2Fill className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='password' required />
                        <FaLock className='icon'/>
                    </div>

                    <div className='remember-forget'>
                        <label><input type='checkbox' />Remember me</label>
                        <a href='#'>Forget password?</a>
                    </div>

                    <button type='submit'>Login</button>
                    <div className='register-link'>
                        <p>Don't have an account? <a href='#' onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>

            <div className='form-box register'>
                <form actions="">
                    <h1>Registration</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Username' required />
                        <RiUserShared2Fill className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type='Email' placeholder='Email' required />
                        <FaEnvelope className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='password' required />
                        <FaLock className='icon'/>
                    </div>

                    <div className='remember-forget'>
                        <label><input type='checkbox' />I agree to term & conditions</label>
                        </div>

                    <button type='submit'>Register</button>
                    <div className='register-link'>
                        <p>Already have an account? <a href='#' onClick={loginLink}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister
