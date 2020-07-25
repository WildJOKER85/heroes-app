import React from 'react'
import s from '../HeroMenuItem/heroMenuItem.module.css'
import {NavLink} from 'react-router-dom'

export const HeroMenuItem = ({item,index}) => {

    return (
        <div>
            <div>
                <NavLink to={`/details/${index + 1}`}  className={s.menu}>
                    <div className={s.icons}>
                        <img src={item.img} alt="" width={60} height={60}/>
                    </div>
                    <div className={s.name}>
                        {item.name}
                        <div>
                            {item.firstName}
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}