import React, { useState } from 'react';
import Base from '../core/Base';
import { Link, Redirect } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from "../auth/helper"

const Signin = () => {

    const [values, setValues] = useState({
        email: "admin@gmail.com",
        password: "admin",
        error: "",
        loading: false,
        didRedirect: false
    });

    const { email, password, error, loading, didRedirect } = values;
    const { user } = isAuthenticated();
    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true })
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: true })
                }
                else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            didRedirect: true
                        })
                    })
                }
            })
            .catch(console.log("SignIn Failed"))
    }

    const perfornRedirect = () => {
        if (didRedirect) {
            if (user && user.role === 1) {
                
                return <p>Redirect to admin</p>
            } else {
                return <p className="text text-white">Redirect User</p>
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />
        }
    }


    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading</h2>
                </div>
            )
        );
    }

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-6 offset-sm-3 text-left">
                    <div style={{ display: error ? "" : "none" }} className="alert alert-danger">
                        {error}
                    </div>
                </div>
            </div>
        );
    }

    const signinForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form >
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input type="text" onChange={handleChange("email")} value={email} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input type="password" onChange={handleChange("password")} value={password} className="form-control" />
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <Base title="Sign in page" description="A Page for user to sigin">
            {loadingMessage()}
            {errorMessage()}
            {signinForm()}
            {perfornRedirect()}
            <p className="text-white text-center">{JSON.stringify(values)}</p>
        </Base>
    )

}

export default Signin;