import stageReducer from '../components/core/stage/reducers/stageReducer'
import layerReducer from '../components/core/layer/reducers/layerReducer'
import {combineReducers} from 'redux'

const reducers = combineReducers({ stage: stageReducer, layer: layerReducer}) 

export default reducers;