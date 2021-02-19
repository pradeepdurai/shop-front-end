import React, { useState } from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import { signup } from '../auth/helper';

const Signup = () => {

    const [values, setValues] = useState({
        first_name: "",
        email: "",
        password: "",
        error: "",
        success: false

    });
    const { first_name, email, password, error, success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false })
        signup({ first_name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                } else {
                    setValues({
                        ...values,
                        first_name: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    })
                }
            })
            .catch(console.log("Error Saving Data"))
    }

    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-6 offeset-sm-3 text-left">
                    <div style={{ display: success ? "" : "none" }} className="alert alert-success">
                        New account was created Successfullt. please <Link to="/signin"> Login Here</Link>
                    </div>
                </div>
            </div>);
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

    const signUpForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form >
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input className="form-control" type="text" onChange={handleChange("first_name")} value={first_name} />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" type="email" onChange={handleChange("email")} value={email} />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control" onChange={handleChange("password")} type="password" value={password} />
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <Base title="Sign up page" description="A Page for user to signup">
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
            <p className="text-white text-center">
                {JSON.stringify(values)}
            </p>
        </Base>
    )

}

export default Signup; 