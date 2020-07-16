import React from 'react'
import s from './details.module.css'
import {Heroes} from '../Heroes/heroes'
import {NavLink} from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export const Details = props => {
    const heroId = props.match.params.heroId - 1
    const heroHistory = Heroes[heroId]

    return (
        <div className={s.block}>
            <div className={s.container}>
                <img src={heroHistory.bgHeroes} alt=""/>
            </div>

            <div className={s.icon}>
                <img src={heroHistory.icon} alt="" width={320} height={350}/>
            </div>
            <div className={s.heroName}>
                <div className={s.name}>
                    {heroHistory.name}
                </div>
                <div>
                    {heroHistory.firstName}
                </div>
            </div>
            <NavLink to={'/menu'}>
                <button type="button" className="btn btn-success"><FaArrowLeft/></button>
            </NavLink>
            <div className={s.history}>
                {heroHistory.heroDetail}
            </div>
        </div>
    )
}