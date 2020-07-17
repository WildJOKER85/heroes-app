import React from 'react'
import s from './details.module.css'
import {Heroes} from '../Heroes/heroes'
import {NavLink} from 'react-router-dom'
import {FaReply} from 'react-icons/fa'

export const Details = props => {
    const heroId = props.match.params.heroId - 1
    const heroHistory = Heroes[heroId]

    return (
        <div>
            <div className={s.container}></div>
            <div className={s.details}>
                <div className={s.btn}>
                    <NavLink to={'/menu'}>
                        <button type="button" className="btn btn-primary col-1 mt-4"><FaReply font-size={'xx-large'}/>
                        </button>
                    </NavLink>
                </div>
                <div className={s.totalHero}>
                    <div className={s.icon}>
                        <img src={heroHistory.icon} alt="" width={320} height={350}/>
                        <div className={s.heroName}>
                            <div>{heroHistory.name}
                            </div>
                            <div>
                                {heroHistory.firstName}
                            </div>
                        </div>
                        <div className={s.history}>
                            {heroHistory.heroDetail}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}