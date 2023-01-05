import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./Register.css";

function Register() {
    const [isRegistered, setIsRegistered] = useState(false);

    function handleFormSubmit() {
        setIsRegistered(true)
    }

    return (
        <div className='app'>
            <div className='login-form'>
                <div className='title'> Register </div>
                <hr />
                {isRegistered ?
                    <div className='success_form'>
                        <p className='success_title'>User has successfully logged In</p>
                        <div className='button-container'>
                            <button type="submit" className='Homepage_button'> <NavLink to="/" className='Homepage_a'> Homepage </NavLink> </button>
                        </div>
                    </div> :
                    <div className='form'>
                        <form onSubmit={handleFormSubmit}>
                            <div className='display'>
                                <div className='column_half'>
                                    <div className='txt_field'>
                                        <input type="text" name="firstname" required />
                                        <span></span>
                                        <label>First name</label>
                                    </div>
                                    <div className='txt_field'>
                                        <input type="text" name="lastname" required />
                                        <span></span>
                                        <label>Last name</label>
                                    </div>
                                    <div className='txt_field'>
                                        <input type="tel" name="uname" required />
                                        <span></span>
                                        <label>Phone number</label>
                                    </div>
                                </div>
                                <div className='column_half'>
                                    <div className='txt_field'>
                                        <input type="email" name="uname" required />
                                        <span></span>
                                        <label> Email </label>
                                    </div>
                                    <div className='txt_field'>
                                        <input type="text" name="uname" required />
                                        <span></span>
                                        <label>Login</label>
                                    </div>
                                    <div className='txt_field'>
                                        <input type="password" name="pass" required />
                                        <span></span>
                                        <label>Password</label>
                                    </div>
                                </div>
                            </div>


                            <div className='pass'>Forgot Password ?</div>
                        </form>
                        <div className='display'>
                            <div className='button-container column_half'>
                                <button onClick={handleFormSubmit} className='Login_button'> Register </button>
                            </div>
                            <div className='button-container column_half'>
                                <button type="submit" className='Homepage_button'> <NavLink to="/" className='Homepage_a'> Homepage </NavLink> </button>
                            </div>
                        </div>
                        <div class="signup_link">
                            Already a member?
                            <NavLink to="/login">
                                <a href="#"> Login </a>
                            </NavLink>
                        </div>
                    </div>}
            </div>
        </div>
    )
}
export default Register;