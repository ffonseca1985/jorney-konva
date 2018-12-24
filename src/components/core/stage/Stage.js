
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStage} from './actions/stageAction'
import { Stage, Layer } from 'react-konva';

class StageComponent extends Component {

    componentDidMount(evt){
        const{ init } = this.props
        init(this.stage);
     }

    render() {

        return (
            <Stage width={window.innerWidth} 
                   height={window.innerHeight} 
                   ref={node => this.stage = node}>
                <Layer ref={node => this.layer = node}>
                </Layer>
            </Stage>
        )
    }
}

const mapDispatchToAction = function (dispatch, state) {

    return {
        init: (stage) => {
            dispatch(createStage(stage))
        }
    }
}

export default connect(null, mapDispatchToAction)(StageComponent)