import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [state, setState] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, confirmPassword } = state;
        if (username.length === 0 || password.length === 0 || confirmPassword.length === 0) {
            onSubmit = false;
            setError('Please enter valid username and password');
         } else if (password !== confirmPassword) {
                onSubmit = false;
                setError('Passwords do not match');
            } else {
                signupUser(username, password);
            }
            }

            return (
                <section className="container">
                    <div className="signup">
                        <h1>Sign Up</h1>
                        <form className="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" className="form-control" id="username" placeholder="Enter username" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" className="form-control" id="password" placeholder="Enter password" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" name="confirmPassword" className="form-control" id="confirmPassword" placeholder="Confirm password" onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn" onClick={handleSubmit}>Sign Up</button>
                        </form>
                        <div>
                            <p>Already have an account? <Link to="/signin">Sign In</Link></p>
                            {error === false && <p>Please enter valid username and password</p>}
                        </div>
                    </div>
                </section>
            );
        };

        export default SignUp;