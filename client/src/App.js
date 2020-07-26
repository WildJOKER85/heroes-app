import React from 'react'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Login} from './Pages/Login/Login'
import {Menu} from './Pages/Menu/Menu'
import {HeroDetails} from './Pages/HeroDetails/HeroDetails'
import {ConstructorField} from './Pages/ConstructorField/ConstructorField'
import {Test} from './test'
import {Barracks} from './Pages/Barracks/Barracks'
import {Hospital} from './Pages/Hospital/Hospital'

const App = () => {

    return (
        <BrowserRouter>
            <div className='app'>
                <Switch>
                    <Route path={'/'} exact component={Login}/>
                    <Route path={'/menu'} component={Menu}/>
                    <Route path={'/details/:heroId'} component={HeroDetails}/>
                    <Route path={'/constructorField'} component={ConstructorField}/>
                    <Route path={'/barracks'} component={Barracks}/>
                    <Route path={'/hospital'} component={Hospital}/>
                    <Route path={'/test'} component={Test}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App




