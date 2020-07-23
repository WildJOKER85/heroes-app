import React from 'react'
import s from './test.module.css'
import {useState} from 'react'

export const Test = () => {
    const [active, setActive] = useState(true)

    return (
        <div className={s.test}>
            <div className={s.container}>
                <div className={s.columns}>
                    <div onClick={()=> setActive(true)} className={s.oneColumn + (active ? '' : active)}>
                        <h4>Новыки</h4>
                    </div>
                    <div onClick={()=> setActive(false)} className={s.twoColumn + (active ? active: '')}>
                        <h4>Военный талант</h4>
                    </div>
                </div>
                <div className={s.block}>
                    {active ? <div>1</div>: <div>2</div>}
                </div>
            </div>
        </div>
    )
}