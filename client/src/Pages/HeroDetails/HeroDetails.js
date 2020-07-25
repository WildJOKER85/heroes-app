import React from 'react'
import s from './heroDetails.module.css'
import {HeroHistory} from '../../components/HeroHistory/heroHistory'
import {heroes} from '../../redux/heroes'
import {Buttons} from '../../components/Buttons/Buttons'

export const HeroDetails = props => {
    const heroId = props.match.params.heroId - 1
    const heroHistory = heroes[heroId]

    return (
        <div>
            <div className={s.container}></div>
            <div className={s.details}>
                <Buttons route={'/menu'}/>
                <HeroHistory heroHistory={heroHistory}/>
            </div>
        </div>
    )
}