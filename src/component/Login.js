import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./Login.css";
export default function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    ///User Login Info
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        },
        {
            username: "user3",
            password: "pass3"
        }
    ]
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        var { uname, pass } = document.forms[0];
        ///Find user login info
        const userData = database.find((user) => user.username === uname.value);

        ///compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                /// Invalid password
                setErrorMessages({ name: "pass", message: errors.pass })
            } else {
                setIsSubmitted(true);
            }
        } else {
            ////Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };
    /// Render error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className='error'>{errorMessages.message}</div>
        );

    return (
        <div className='app'>
            <div className='login_forms'>
                <div className='title'> Login </div>
                <hr />
                {isSubmitted ?
                    <div className='success_form'>
                        <p className='success_title'>User has successfully logged In</p>
                        <div className='button-container'>
                            <button type="submit" className='Homepage_button'> <NavLink to="/" className='Homepage_a'> Homepage </NavLink> </button>
                        </div>
                    </div> :
                    <div className='form'>
                        <form onSubmit={handleSubmit}>
                            <div className='txt_field'>
                                <input type="text" name="uname" required />
                                <span></span>
                                <label>Username</label>
                            </div>
                            <span>
                                {renderErrorMessage("uname")}
                            </span>

                            <div className='txt_field'>
                                <input type="password" name="pass" required />
                                <span></span>
                                <label>Password</label>
                            </div>
                            <span>
                                {renderErrorMessage("pass")}
                            </span>
                            <div className='pass'>Forgot Password ?</div>
                            <div className='button-container'>
                                <button type="submit" className='Login_button'> Login </button>
                            </div>
                        </form>
                        <div className='button-container'>
                            <button type="submit" className='Homepage_button'> <NavLink to="/" className='Homepage_a'> Homepage </NavLink> </button>
                        </div>
                        <div class="signup_link">
                            Not a member?
                            <NavLink to="/register">
                                <a href="#"> Register </a>
                            </NavLink>
                        </div>

                    </div>}
            </div>
        </div>
    )
}
