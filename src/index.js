import React from 'react'
import {render} from 'react-dom'
import App from './components/app'


render(<App/>, document.getElementById('root'))


// var layer = new Konva.Layer()

// var rect = new Konva.Rect({
//     draggable: true,
//     x: state.stage.content.offsetHeight/2,
//     y: state.stage.content.offsetHeight/2,
//     fill: 'black',
//     width: 50,
//     height: 50
// })

//  layer.add(rect)
//  state.stage.add(layer)

//  layer.draw()