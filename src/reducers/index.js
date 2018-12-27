import stageReducer from '../components/core/stage/reducers/stageReducer'
import layerReducer from '../components/core/layer/reducers/layerReducer'
import shapeReducer from '../components/core/shape/reducers/shapeReducer'
import {combineReducers} from 'redux'

const reducers = combineReducers({ stage: stageReducer, layer: layerReducer, currentShapeSelected: shapeReducer}) 

export default reducers;