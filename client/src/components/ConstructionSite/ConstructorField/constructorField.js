import React from 'react'
import s from '././constructorfield.module.css'
import {Constructions} from '../constructions'
import {NavLink} from 'react-router-dom'
import {FaReply} from 'react-icons/fa'

export const ConstructorField = () => {

    return (
        <div>
            <div className={s.btn}>
                <NavLink to={'/menu'}>
                    <button type="button" className="btn btn-primary mt-2"><FaReply font-size={'xx-large'}/>
                    </button>
                </NavLink>
            </div>
            <div className={s.constructor}>
                <div className={s.name}>
                    {Constructions.total.info.map((item, index) =>
                        <div key={index} className={s.blocks}>
                            {item.name}
                            <div className={s.icon}>
                                <img src={item.icon} alt="" width={230} height={155}/>
                            </div>
                            <div className={s.title}>
                                {item.title}
                            </div>
                        </div>
                    )}
                    {Constructions.total.links.map((item, index) =>
                        <NavLink to={'#'}>
                            <div className={s.blocks}>
                                {item.name}
                                <div className={s.icon}>
                                    <img src={item.icon} alt="" width={230} height={155}/>
                                </div>
                                <div className={s.title}>
                                    {item.title}
                                </div>
                            </div>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    )
}