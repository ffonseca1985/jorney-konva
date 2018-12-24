
import React, { Component } from 'react'
import Stage from './core/stage/Stage'
import store from '../store/index'
import { Provider } from 'react-redux'

class App extends Component {

    render() {
      
        return (
            <div>
                <Provider store={store}>
                    <Stage />
                </Provider>
            </div>
        )
    }
}

export default App
