
import {mouseCode, keyBoadCode} from '../../../../shared/constants/keyCodeConstant'
import Menuprincipal from '../menu/menuprincipal'
import * as UtilState from '../../../../shared/state/'

class InterationsClientStage {

    static loadShapes(evt){

        if (!UtilState.getState().state.hasEvent)
            return

        switch (evt.evt.button) {
            case mouseCode.rigthButton:
                
                var result = window.prompt('Qual componente deseja desenhar??', "");
                if (result == 1) {
                    var nameComponente = window.prompt('Digite um nome para seu componente!', "");
                    Menuprincipal.createCircle(nameComponente);
                }
                else{
                    alert('ainda não implementado')
                }
                break;
        
            default:
                break;
        }
    }
}

export default InterationsClientStage