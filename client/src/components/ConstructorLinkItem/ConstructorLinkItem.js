import React from 'react'
import s from '../ConstructorLinkItem/constructorLinkItem.module.css'
import {NavLink} from 'react-router-dom'

export const ConstructorLinkItem = ({item}) => {

    return (
        <div>
            <NavLink to={item.route}>
                <div className={s.blocks}>
                    {item.name}
                    <div className={s.icon}>
                        <img src={item.icon} alt="" width={230} height={155}/>
                    </div>
                    <div className={s.title}>
                        {item.title}
                    </div>
                </div>
            </NavLink>
        </div>
    )
}