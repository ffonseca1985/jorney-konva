
import InterationsClientStage from '../../../community/stage/interations/interationsClientStage'

var eventEmiter = (stage) => {

    stage.on('mouseover', function (evt) {
    })

    stage.on('mousedown', function (evt) {
        InterationsClientStage.loadShapes(evt)
    })

    stage.on('mousemove', function (evt) {
    })
}

export default eventEmiter