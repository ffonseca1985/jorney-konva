
import React, { Component } from 'react'
import Navegation from  './navegation'
import store from '../store/index'
import { Provider } from 'react-redux'

class App extends Component {

    render() {
      
        return (
            <div>
                <Provider store={store}>
                    <Navegation />
                </Provider>
            </div>
        )
    }
}

export default App
