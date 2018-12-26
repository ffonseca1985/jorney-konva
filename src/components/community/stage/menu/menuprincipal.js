import CircleManager from '../../circle/circle' 
import { Circle } from 'konva';

class MenuPrincipal {

    constructor(){
        this.shapes =new Array();
    } 
    

    get shapes(){
        return this.shapes
    }

    static createCircle(text){
        var circle = new CircleManager().create(text)
        //this.shapes.push(circle)
    }

    static createInit(){

    }

    static CreateMenu(){

    }

    static CreateFinally(){

    }
}

export default MenuPrincipal