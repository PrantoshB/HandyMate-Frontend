import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [state, setState] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            }));
        };

        const [error, setError] = useState(true);

        const handleSubmit = (e) => {
            e.preventDefault();
            const item = {
                username: state.username,
                password: state.password,
            };
            if (state.username.length !== 0 && state.password.length !== 0) {
                dispatch(getUser(item));
                navigate("/");
            }
            else {
                onSubmit = false;
                setError(false);
            }
        };

        return (
            <section className="container">
                <div className="signin">
                    <h1>Sign In</h1>
                    <form className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" className="form-control" id="username" placeholder="Enter username" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="form-control" id="password" placeholder="Enter password" onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn" onClick={handleSignin}>Sign In</button>
                    </form>
                    <div>
                    <p>Do not have an account? <Link to="/signup">Sign Up</Link></p>
                    {error === false && <p>Please enter valid username and password</p>}
                </div>
            </div>
        </section>
    );
    };

    export default SignIn;
