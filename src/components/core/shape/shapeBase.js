import Konva from 'konva'
import * as UtilStage from '../../../shared/state'

class ShapeBase {

    constructor(){
        this.instance = {}
        this.x = window.innerWidth / 2
        this.y = window.innerHeight / 2
        this.fontSize = 12
        this.fontFamily = 'Calibri'
        this.fill = '#555'
        this.align = 'center'
        this.draggable = true
    }

    create(shape, config, text) {
        this.instance = Object.create(shape.prototype);
        instance.constructor(config)
        return instance
    }

    clearConnector(){
        this.instance.connector = {}
    }    

    load(text, instance, eventEmiter) {
        this.drawAndAddShape(instance)
        this.loadDescription(text)
        this.loadEvents(eventEmiter, instance)
        this.clearConnector()
    }

    loadEvents = (eventEmiter, instance) => {

        var self = this
        eventEmiter(instance);
        instance.on('mousedown mouseover mouseout mouseup mousemove', function (evt) {
            self.textShape.setX(this.getX() - 17)
            self.textShape.setY(this.getY() - 8)
            UtilStage.drawShape()
        })

        instance.on('mouseover', function(evt){
            UtilStage.addCurrentShape(self.instance)
        })

        instance.on('mouseout', function(evt){
            UtilStage.removeCurrentShape(self.instance)
        })
    }

    drawAndAddShape(instance) {
        UtilStage.drawAndAddShape(instance)
    }

    draw() {
        UtilStage.drawShape()
    }

    loadDescription(text) {
        //TODO Ajustar a dimensão do Texto e seu alinhamento
        var self = this
        this.textShape = new Konva.Text({
            x: self.x - 17,
            y: self.y - 8,
            fontSize: self.fontSize,
            fontFamily: self.fontFamily,
            fill: '#FFFFFF',
            align: self.align,
            text: text
        })

        UtilStage.drawAndAddShape(this.textShape)
    }

    createConfiguration() { }
}

export default ShapeBase