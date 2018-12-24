
import CirculeComponent from '../../../community/menu'
import InterationsClientStage from '../../../community/stage/interations/interationsClientStage'

var eventEmiter = (stage) => {

    stage.on('mouseOver', function (evt) {

    })

    stage.on('mouseDown', function (evt) {
        InterationsClientStage.loadShapes(evt)
    })

    stage.on('mouseMove', function (evt) {
        
    })
}

export default eventEmiter