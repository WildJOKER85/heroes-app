import React from 'react'
import s from '../ConstructionSite/constructionSite.module.css'
import {NavLink} from 'react-router-dom'
import {constructions} from '../../redux/constructions'

export const ConstructionSite = () => {

    return (
        <div>
            <div className={s.constructorBlocks}>
                <NavLink to={'/constructorField'} className={s.menu}>
                    <div className={s.icons}>
                        <img src={constructions.img} alt="" width={60} height={60}/>
                    </div>
                    <div className={s.name}>
                        {constructions.name}
                    </div>
                </NavLink>
            </div>
        </div>
    )
}