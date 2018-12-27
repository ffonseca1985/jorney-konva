import Konva from 'konva'
import * as UtilStage from '../../../shared/state'
import { mouseCode } from '../../../shared/constants/keyCodeConstant'
import Connector from '../connector/connector'

class ShapeBase {

    constructor() {
        this.shape = {}
        this.x = window.innerWidth / 2
        this.y = window.innerHeight / 2
        this.fontSize = 12
        this.fontFamily = 'Calibri'
        this.fill = '#555'
        this.align = 'center'
        this.draggable = true
    }

    create(shape, config, text) {
        this.shape = Object.create(shape.prototype);
        this.shape.constructor(config)
        return this.shape
    }

    clearConnector() {
        this.shape.connector = {}
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

        instance.on('mouseout', function (evt) {
            UtilStage.removeCurrentShape(self.shape)
        })

        instance.on('mousedown', function (evt) {
            UtilStage.addCurrentShape(self.shape)
            self.connect(evt.evt, self.shape)
        })
    }

    connect(evt, shape) {

        UtilStage.addCurrentShape(shape)

        if (evt == null || evt == undefined)
            return;

        if (evt.button != mouseCode.rigthButton)
            return;

        var result = window.prompt('o que deseja executar?')

        if (result == 1) {
            var initialConnection = {
                point: [shape.getX(), shape.getY()],
                shape: shape
            }

            var finalConnection = {
                point: [evt.pageX, evt.pageY],
                shape: null
            }

            this.shape.connector = new Connector(initialConnection, finalConnection)
            UtilStage.drawAndAddShape(this.shape.connector.getArrow())
        }
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

        this.textShape.setListening(false)
        UtilStage.drawAndAddShape(this.textShape)
    }

    createConfiguration() { }
}

export default ShapeBase