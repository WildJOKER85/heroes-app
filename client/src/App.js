import React from 'react'
import './App.css'
import {Login} from './Pages/Login/login'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Menu} from './Pages/Menu/menu'
import {HeroDetails} from './Pages/HeroDetails/HeroDetails'
import {ConstructorField} from './Pages/ConstructorField/constructorField'
import {Test} from './test'
import {Barracks} from './Pages/Barracks/barracks'
import {Hospital} from './Pages/Hospital/hospital'

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
                    <Route path={'/barracks'} component={Barracks}/>
                    <Route path={'/hospital'} component={Hospital}/>
                    <Route path={'/test'} component={Test}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App




