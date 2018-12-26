import Konva from 'konva'
import eventEmiter from './events/eventEmiter'

class Connector {
    
    constructor(initialconnection, finalConnection){
        
        this.arrow = null
        
        this.conexaoInitial = {
            point: initialconnection.point,
            shape: finalConnection.shape
        }

        this.conexaoFinal = {
            point: finalConnection.point,
            shape: finalConnection.shape
        }

        this.arrow = new Konva.Arrow({
            points: this.initialconnection.point.concat(this.finalConnection.point),
            pointerLength: 10,
            pointerWidth: 10,
            fill: 'black',
            stroke: 'black',
            strokeWidth: 4
        });

        eventEmiter(this)
    }

    getArrow(){
        return this.arrow
    }

    getPoints(){

        var points = [this.initialconnection.point[0], this.initialconnection.point[1], this.finalConnection.point[0], this.finalConnection.point[1]];
        return points
    }

    ajustPosition(pointX, pointY, shape = null){
    
    }
}

export default Connector