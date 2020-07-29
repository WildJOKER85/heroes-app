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
            <div>
                <Buttons route={'/constructorField'}/>
            </div>
            <div className={s.blocks}>
                <div className={s.classOne}>
                    <div>
                        <h4>Войска 1 класса</h4>
                    </div>
                    <div className={s.item}>
                        {troops.classes.one.map((item, index) =>
                            <TroopsClassOne
                                item={item}
                                key={index}
                            />
                        )}
                    </div>

                </div>
                <div className={s.classOne}>
                    <div>
                        <h4>Войска 2 класса</h4>
                    </div>
                    <div className={s.item}>
                        {troops.classes.two.map((item, index) =>
                            <TroopsClassTwo
                                item={item}
                                key={index}
                            />
                        )}
                    </div>
                </div>
                <div className={s.classOne}>
                    <div>
                        <h4>Войска 3 класса</h4>
                    </div>
                    <div className={s.item}>
                        {troops.classes.three.map((item, index) =>
                            <TroopsClassThree
                                item={item}
                                key={index}
                            />
                        )}
                    </div>
                </div>
                <div className={s.classOne}>
                    <div>
                        <h4>Войска 4 класса</h4>
                    </div>
                    <div className={s.item}>
                        {troops.classes.four.map((item, index) =>
                            <TroopsClassFour
                                item={item}
                                key={index}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}