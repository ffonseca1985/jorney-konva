
import store from './../../store'
import { drawShape as drawShapeAction, addShape as addShapeAction, listenningOffStage, listenningOnStage } from '../../components/core/stage/actions/stageAction'
import { addCurrentSelectShape, removeCurrentSelectShape } from '../../components/core/shape/actions/shapeAction'

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

var addCurrentShape = function(shape){

    var store  = getState().store
    store.dispatch(addCurrentSelectShape(shape))
    store.dispatch(listenningOffStage())
}

var removeCurrentShape = function(shape){
    
    var store  = getState().store 
    store.dispatch(removeCurrentSelectShape(shape))
    store.dispatch(listenningOnStage())
}

var drawAndAddShape = function(shape){

    addShape(shape)
    drawShape()
}

export { getState, addShape, drawAndAddShape, drawShape, addCurrentShape, removeCurrentShape }
