import React from 'react'
import './login.css'
import {NavLink} from 'react-router-dom'

export const Login = () => {

    return (
        <div>

            <form className="form-inline">
                <div className="icon">

                </div>
                <div className="form-group p-1">
                    <input type="email" className="form-control" placeholder="Enter email"/>
                </div>
                <div className="form-group p-1">
                    <input type="password" className="form-control" placeholder="Password"/>
                </div>
                <NavLink to={'/menu'}>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </NavLink>
            </form>
        </div>
    )
}