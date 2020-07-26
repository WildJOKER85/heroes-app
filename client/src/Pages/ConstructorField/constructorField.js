import React from 'react'
import s from './constructorfield.module.css'
import {constructions} from '../../redux/constructions'
import {NavLink} from 'react-router-dom'
import {Buttons} from '../../components/Buttons/Buttons'
import {ConstructorInfoItem} from '../../components/ConstructorInfoItem/ConstrutorInfoItem'
import {ConstructorLinkItem} from '../../components/ConstructorLinkItem/ConstructorLinkItem'

export const ConstructorField = () => {

    return (
        <div>
            <Buttons route={'/menu'}/>
            <div className={s.constructor}>
                <div className={s.name}>
                    {constructions.total.info.map((item, index) =>
                        <ConstructorInfoItem
                            item={item}
                            key={index}
                        />
                    )}
                    {constructions.total.links.map((item, index) =>
                        <ConstructorLinkItem
                            item={item}
                            key={index}
                        />
                    )}
                    <NavLink to={'/test'}>Go To Test</NavLink>
                </div>
            </div>
        </div>
    )
}