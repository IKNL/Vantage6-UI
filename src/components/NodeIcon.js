import React from 'react';
import { connect } from 'react-redux';

import { selectNode, selectPage } from '../actions';
class NodeIcon extends React.Component {

    state = { hover: false }

    render(){
        return(
            <button
            className="ui button"
            onClick={() => {
                this.props.selectNode(this.props.nodeID);
                this.props.selectPage(5);
                }
            }
            >
                <div><i className="ui server icon middle aligned"></i>{this.props.nodeID}</div>
                
            </button>
        )
    }
    
}

export default connect(null, { selectNode, selectPage })(NodeIcon);