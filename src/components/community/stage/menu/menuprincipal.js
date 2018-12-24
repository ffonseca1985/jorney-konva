import CircleComponent from '../../circle/circle' 
import { Circle } from 'konva';

class MenuPrincipal {

    shapes = [];

    get shapes(){
        return this.shapes
    }

    static createCircle(text){
        var cicle = new CircleComponent(text)
        this.shapes.push(Circle)
    }

    static createInit(){

    }

    static CreateMenu(){

    }

    static CreateFinally(){

    }
}

export default MenuPrincipal