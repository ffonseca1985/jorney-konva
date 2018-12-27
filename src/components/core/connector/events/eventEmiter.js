import {drawShape } from '../../../../shared/state'

var eventEmiter = (connector) => {

    connector.arrow.on('pointsChange', function(){
        alert('aqui!!!')
    })

    var ajustPoint = function(pointX, pointY, shape = null){
        connector.finalConnection = {
            point: [pointX, pointY],
            shape: shape
        }

        var points = this.getPoints()
        connector.arrow.setPoints(points)
        drawShape()
    }

    var getPoints = function(){
        var points = [connector.initialconnection.point[0], connector.initialconnection.point[1], connector.finalConnection.point[0], connector.finalConnection.point[1]]
        return points
    }
}

export default eventEmiter