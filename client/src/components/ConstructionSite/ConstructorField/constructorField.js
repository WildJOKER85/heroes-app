import React from 'react'
import s from '././constructorfield.module.css'
import {Constructions} from '../constructions'

export const ConstructorField = () => {

    return (
        <div className={s.constructor}>
            <div className={s.nameConstructor}>
                {Constructions.constructionsInfo.map((item, index) =>
                    <div key={index} className={s.blocks}>
                        {item.nameConstructor}
                        <div className={s.icon}>
                            <img src={item.icon} alt="" width={230} height={155}/>
                        </div>
                        <div className={s.nickName}>
                            {item.nickName}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}