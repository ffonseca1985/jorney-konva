
import {mouseCode, keyBoadCode} from '../../../../shared/constants/keyCodeConstant'
import Menuprincipal from '../menu/menuprincipal'

class InterationsClientStage {

    static loadShapes(evt){
        switch (evt.evt.button) {
            case mouseCode.rigthButton:
                //TODO  carregar o menu dinamicamente
                var result = window.prompt('o que vc quer Globalmente?', "");

                if (result == 1)
                {
                    var nameComponente = window.prompt('Digite um nome para seu componente!', "");
                    Menuprincipal.createCircle(nameComponente);
                }
                break;
        
            default:
                break;
        }  

    }
}

export default InterationsClientStage