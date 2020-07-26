import React from 'react'
import s from './troopsClassTwo.module.css'
import {NavLink} from 'react-router-dom'

export const TroopsClassTwo = ({item}) => {

    return (
        <div>
            <div className={s.blocks}>
                <NavLink to={'#'}>
                    <div className={s.name}>
                        {item.name}
                    </div>
                    <div>
                        <img src={item.img} alt="" width={248} height={217}/>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}