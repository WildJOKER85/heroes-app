import React from 'react'
import s from './troopsClassOne.module.css'
import {NavLink} from 'react-router-dom'

export const TroopsClassOne = ({item}) => {

    return (
        <div>
            <div className={s.blocks}>
                <NavLink to={'#'}>
                    <div className={s.name}>
                        {item.name}
                    </div>
                    <div className={s.img}>
                        <img src={item.img} alt="" width={248} height={217}/>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}