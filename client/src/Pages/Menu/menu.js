import React from 'react'
import s from './menu.module.css'
import {HeroMenuItem} from '../../components/HeroMenuItem/HeroMenuItem'
import {ConstructionSite} from '../../components/ConstructionSite/constructionSite'
import {heroes} from '../../redux/heroes'

export const Menu = () => {

    return (
        <div className={s.blocks}>
            <div className={s.container}></div>
            <div className={s.leftMenu}>
                {heroes.map((item, index) => <HeroMenuItem item={item} index={index}/>)}
            </div>
            <ConstructionSite/>
        </div>
    )
}