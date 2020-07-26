import React from 'react'
import s from '../HeroHistory/herohistory.module.css'

export const HeroHistory = props => {
    const heroHistory = props.heroHistory

    return (
        <div>
            <div className={s.container}></div>
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
    )
}