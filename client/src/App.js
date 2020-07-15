import React from 'react'
import './App.css'
import {Login} from './components/Login/login'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Menu} from './components/Menu/menu'
import {Details} from './components/Details/details'
import {Test} from './components/test'

const App = () => {

    return (
        <BrowserRouter>
            <div className='app'>
                <Switch>
                    <Route path={'/'} exact component={Login}/>
                    <Route path={'/menu'} component={Menu}/>
                    <Route path={'/details/:heroId'} component={Details}/>
                    <Route path={'/test'} component={Test}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App




