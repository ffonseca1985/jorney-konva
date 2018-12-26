import * as UtilStage from  '../../../../shared/state'


var eventEmiter = (circle) => {

    circle.on('mouseover', function (evt) {
        this.setStrokeWidth(3);
        UtilStage.drawShape()
    })

    circle.on('mouseout', function (evt) {
        this.setStrokeWidth(1);
        UtilStage.drawShape()
    })

    circle.on('mousedown', function (evt) {
    })

    circle.on('mousemove', function (evt) {
        
    })
}

export default eventEmiter
