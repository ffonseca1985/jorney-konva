
import Konva from 'konva'
import ShapeBase from '../../core/shape/shapeBase'
import eventEmiter from './events/eventEmiter'

class CircleComponent extends ShapeBase{

    radius = 10
    fill = '#808080'
    stroke = '#ffffff'
   
    constructor(text){
        this = super.create(Konva.Circle, this.createConfiguration())
        this.load(text, eventEmiter)
    }

    createConfiguration(){
        
        self = this

        return configInitialState = {
            radius: self.radius,
            fill: self.fill,
            stroke: self.stroke,
            dragrable: self.dragrable,
            x: self.x,  
            y: self.y
        }
    }
}

export default CircleComponent