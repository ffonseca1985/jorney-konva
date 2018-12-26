
import {actionTypeConstant} from './../constants'

var addCurrentSelectShape = (shape) => ({
    type: actionTypeConstant.addCurrentSelectShape,
    toUnderline: () => {
        shape.setStrokeWidth(3);
    }
});

var removeCurrentSelectShape = (shape) => ({
    type: actionTypeConstant.removeCurrentSelectedShape,
    toEmphasize: () => {
        shape.setStrokeWidth(1);
    }
});