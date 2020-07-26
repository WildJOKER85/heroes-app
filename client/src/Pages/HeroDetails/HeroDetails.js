import React from 'react'
import {HeroHistory} from '../../components/HeroHistory/HeroHistory'
import {heroes} from '../../redux/heroes'
import {Buttons} from '../../components/Buttons/Buttons'

export const HeroDetails = props => {
    const heroId = props.match.params.heroId - 1
    const heroHistory = heroes[heroId]

    return (
        <div>
            <Buttons route={'/menu'}/>
            <HeroHistory heroHistory={heroHistory}/>
        </div>
    )
}