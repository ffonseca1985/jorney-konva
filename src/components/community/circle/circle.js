
import Konva from 'konva'
import ShapeBase from '../../core/shape/shapeBase'
import eventEmiter from './events/eventEmiter'

class CircleManager extends ShapeBase{

    radius = 35
    fill = '#808080'
    stroke = 'Black'
   
    create(text){
        var instance = super.create(Konva.Circle, this.createConfiguration(), text)
        this.load(text, instance, eventEmiter)
        return instance
    }

    createConfiguration(){
        
        var self = this

        return  {
            radius: self.radius,
            fill: self.fill,
            stroke: self.stroke,
            draggable: self.draggable,
            x: self.x,  
            y: self.y
        }
    }
}

export default CircleManager