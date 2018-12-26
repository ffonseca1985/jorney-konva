
import store from './../../store'
import { drawShape as drawShapeAction, addShape as addShapeAction } from '../../components/core/stage/actions/stageAction'

var getState = function(){

    var states = store.getState()
    
    return {
        store: store,     
        stage: states.stage.stage, // Kanvas
        layer: states.layer.layer // Camadas e Agrupamentos
    }
}

var addShape = function(shape){

    var store  = getState().store
    store.dispatch(addShapeAction(shape))
}

var drawShape = function(){

    var store  = getState().store
    store.dispatch(drawShapeAction())
}

var addCurrentShape = function(){
    
}

var drawAndAddShape = function(shape){

    addShape(shape)
    drawShape()
}

export { getState, addShape, drawAndAddShape, drawShape }
