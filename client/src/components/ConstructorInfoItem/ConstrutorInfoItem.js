import React from 'react'
import s from '../ConstructorInfoItem/constructorInfoItem.module.css'

export const ConstructorInfoItem = ({item}) => {

    return (
        <div>
            <div className={s.blocks}>
                {item.name}
                <div className={s.icon}>
                    <img src={item.icon} alt="" width={230} height={155}/>
                </div>
                <div className={s.title}>
                    {item.title}
                </div>
            </div>
        </div>
    )
}
