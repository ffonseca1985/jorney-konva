
import {actionTypeConstant} from '../constants'
import eventEmiter from '../events/eventEmiter'

const changeScalaStage = (scala) => ({
    type: actionTypeConstant.change_scala,
    scala
})

const createStage = (stage) => ({
    type: actionTypeConstant.create_stage,
    stage,
    load = () => {
        eventEmiter(this.stage)
    }
})

const addLayer = (layer) => ({
    type: actionTypeConstant.add_layer,
    layer
})

const addShape = (shape) => ({
    type: actionTypeConstant.add_shape,
    shape
})

const drawShape = () => ({
    type:actionTypeConstant.draw_shape
})


export {changeScalaStage, createStage, addLayer, addShape, drawShape}


