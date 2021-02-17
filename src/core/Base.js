import React from 'react';
import '../styles.css';
import { API } from '../backend';
import Menu from './Menu';
import './core.css';

const Base = ({
    title = "Base",
    description = "Description",
    className="bg-dark text-white, p-4",
    children
}) => {
    return (
        <div>
            <Menu/>
            <div className="container-fluid">
                <div className="bg-dark text-white text-center">
                    <h2 className="display-5">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="footer custom-footer bg-dark mt-auto py-3">
                <div className="container-fluid bg-success text-white text-center py-3">
                    <h1>If You Have Got any question feel free to reach out!</h1>
                    <button className="btn btn-warning btn-lg">Contact Us</button>
                </div>
                <div className="container">
                    <span className="text-muted">
                        Shopping
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Base

