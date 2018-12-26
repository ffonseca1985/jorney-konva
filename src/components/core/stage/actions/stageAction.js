
import {actionTypeConstant} from '../constants'
import eventEmiter from '../events/eventEmiter'

const changeScalaStage = (scala) => ({
    type: actionTypeConstant.change_scala,
    scala
})

const createStage = (stage) => ({
    type: actionTypeConstant.create_stage,
    stage,
    load: () => {
        if (stage != undefined)
            eventEmiter(stage)
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

const listenningOnStage = () => ({
    type: actionTypeConstant.listenningOn
}) 

const listenningOffStage = () => ({
    type: actionTypeConstant.listenningOff
})

export {changeScalaStage, createStage, addLayer, addShape, drawShape, listenningOnStage, listenningOffStage}


