import React from 'react'
import s from './buttons.module.css'
import {NavLink} from 'react-router-dom'
import {FaReply} from 'react-icons/fa'

export const Buttons = ({route}) => {

    return (
        <div>
            <div className={s.btn}>
                <NavLink to={route} >
                    <button type="button" className="btn btn-primary mt-2"><FaReply font-size={'xx-large'}/>
                    </button>
                </NavLink>
            </div>
        </div>
    )
}