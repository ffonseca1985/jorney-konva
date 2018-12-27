import Konva from 'konva'
import eventEmiter from './events/eventEmiter'

class Connector {
    
    constructor(initialconnection, finalConnection){
                
        this.initialconnection = {
            point: initialconnection.point,
            shape: initialconnection.shape
        }

        this.finalConnection = {
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
}

export default Connector