
import { actionTypeConstant } from '../constants'

var initialState = {
    text: null,
    stage: null
}
/**
 * 
 * @param {Este parametro contradiz o conceito de funções puras porque o stage neste caso será evoluido porém com a mesma intancia} state 
 * @param {Ação responsável pela evolução da instância} action 
 */
var stageReducer = function(state = initialState, action) {
   
    switch (action.type) {
        case actionTypeConstant.create_stage:
            state.stage = action.stage
            action.load()
            break
        case actionTypeConstant.change_scala:
            state.scale = action.scale
            break     
        case actionTypeConstant.save_stage:
             state.text = state.toJSON()
             break     
        case  actionTypeConstant.draw_shape:
             state.stage.find('Layer')[0].draw()
             break    
        case  actionTypeConstant.add_shape:
              state.stage.find('Layer')[0].add(action.shape)
             break
        case actionTypeConstant.add_layer:
            state.stage.add(action.layer)
            break 
         default:
            return state       
    }
    return state;
}

export default stageReducer