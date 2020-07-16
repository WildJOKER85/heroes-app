import React from 'react'
import './login.css'
import {NavLink} from 'react-router-dom'

export const Login = () => {

    return (
        <div className={'customContainer'}>
            <div className={'background'}></div>
            {/*<form className="form-inline">*/}
            <div className="container">
                <div className="row justify-content-center my">
                    <div className="col-3">
                        <input type="email" className="form-control" placeholder="Enter email"/>
                    </div>
                </div>
                <div className="row justify-content-center my">
                    <div className="col-3 ">
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-3 align-self-center">
                        <NavLink to={'/menu'}>
                            <button type="submit" className="btn btn-primary">Sign In</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            {/*<div>*/}
            {/*    <div className="icon">*/}

            {/*    </div>*/}
            {/*    <div className="form-group p-1">*/}
            {/*        <input type="email" className="form-control" placeholder="Enter email"/>*/}
            {/*    </div>*/}
            {/*    <div className="form-group p-1">*/}
            {/*        <input type="password" className="form-control" placeholder="Password"/>*/}
            {/*    </div>*/}
            {/*    <NavLink to={'/menu'}>*/}
            {/*        <button type="submit" className="btn btn-primary">Sign In</button>*/}
            {/*    </NavLink>*/}
            {/*</div>*/}
            {/*</form>*/}
        </div>
    )
}