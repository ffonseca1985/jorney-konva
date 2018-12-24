import * as UtilStage from  '../../../shared/state'

class ShapeBase {

    x = window.innerWidth/2
    y = window.innerHeight/2
    fontSize= 10
    fontFamily= 'Calibri'
    fill= '#555'
    align= 'center'
    dragrable = true
    
    create(shape, config, text){
        var instance = Object.create(shape.prototype, config);
        return instance
    }
    
    load(text, eventEmiter){
        this.loadEvents(eventEmiter)
        this.loadDescription(text);
        this.drawAndAddShape()
    }

    loadEvents = (eventEmiter) => { 
        eventEmiter();
    } 

    drawAndAddShape(){
        UtilStage.drawAndAddShape(this)
    }

    draw(){
        UtilStage.drawShape()
    }

    loadDescription(text){

        var self = this
        this.textShape = new Konva.Text({
            x: self.x,
            y: self.y,
            fontSize: self.fontSize,
            fontFamily: self.fontFamily,
            fill: self.fill,
            align: self.align,
            text: text
        })

        UtilStage.drawAndAddShape(this.textShape)
    }

    createConfiguration(){}
}

export default ShapeBase