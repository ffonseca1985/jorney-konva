

import React, { Component} from 'react'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom' 
import Welcome from './welcome'
import Jorney from './Jorney'

class Navegation extends Component{

    render(){
        return(
            <BrowserRouter>
                <div>

                    <ul>
                        <li>
                            <NavLink to='/'>Welcome</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='journey'>Jorney</NavLink>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path='/' component={Welcome}></Route>
                        <Route exact path='/journey' component={Jorney} ></Route>
                    </Switch>
                </div>
            
            </BrowserRouter>
        )
    }
}

export default Navegation
