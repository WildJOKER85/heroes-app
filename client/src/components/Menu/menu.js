import React from 'react'
import s from './menu.module.css'
import {NavLink} from 'react-router-dom'
import {Heroes} from '../Heroes/heroes.js'
import {Constructions} from '../ConstructionSite/constructions'

export const Menu = () => {

    return (
        <div className={s.blocks}>
            <div className={s.container}></div>
            <div> {Heroes.map((item, index) => (
                <NavLink to={`/details/${index + 1}`} key={index} className={s.menu}>
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
            ))}
            </div>
            <div className={s.constructorBlocks}>
                <NavLink to={'/constructorField'} className={s.menu}>
                    <div className={s.icons}>
                        <img src={Constructions.img} alt="" width={60} height={60}/>
                    </div>
                    <div className={s.name}>
                        {Constructions.construction}
                    </div>
                </NavLink>
            </div>
        </div>
    )
}