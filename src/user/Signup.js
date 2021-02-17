import React, { useState } from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';

const Signup = () => {

    const signUpForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form >
                        <div className="form-group">
                            <lable className="text-light">Name</lable>
                            <input class="form-control" type="text" name="" id=""/>
                        </div>
                        <div className="form-group">
                            <lable className="text-light">Email</lable>
                            <input class="form-control" type="email" name="" id=""/>
                        </div>
                        <div className="form-group">
                            <lable className="text-light">Password</lable>
                            <input class="form-control" type="password" name="" id=""/>
                        </div>
                        <button className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <Base title="Sign up page" description="A Page for user to signup">
            {signUpForm()}
        </Base>
    )

}

export default Signup;