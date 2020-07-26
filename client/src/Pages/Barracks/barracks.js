import React from 'react'
import s from './barracks.module.css'
import {troops} from '../../redux/troops'
import {TroopsClassOne} from '../../components/TroopsClassOne/TroopsClassOne'
import {Buttons} from '../../components/Buttons/Buttons'
import {TroopsClassTwo} from '../../components/TroopsClassTwo/TroopsClassTwo'
import {TroopsClassThree} from '../../components/TroopsClassThree/TroopsClassThree'
import {TroopsClassFour} from '../../components/TroopsClassFour/TroopsClassFour'

export const Barracks = () => {

    return (
        <div className={s.barracks}>
            <Buttons route={'/constructorField'}/>
            <div className={s.content}>
                {troops.classes.one.map((item, index) =>
                    <TroopsClassOne
                        item={item}
                        key={index}
                    />
                )}
                {troops.classes.two.map((item, index) =>
                    <TroopsClassTwo
                        item={item}
                        key={index}
                    />
                )}
                {troops.classes.three.map((item, index) =>
                    <TroopsClassThree
                        item={item}
                        key={index}
                    />
                )}
                {troops.classes.four.map((item, index) =>
                    <TroopsClassFour
                        item={item}
                        key={index}
                    />
                )}
            </div>
        </div>
    )
}