import React, { useState } from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';

const Signin = () =>{

    const signinForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form >
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
        <Base title="Sign in page" description="A Page for user to sigin">
            {signinForm()}
        </Base>
    )

}

export default Signin;