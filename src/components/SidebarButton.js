import React from 'react';
import { connect } from 'react-redux';

import { selectPage } from '../actions';
class SidebarButton extends React.Component {

    state = { hover: false }

    mouseEnter = () => {
        this.setState({hover: true});
    };

    mouseLeave = () => {
        this.setState({hover: false});
    };

    isVisible = () => {
        return this.state.hover ? "button-name visible" : "button-name";
    }
    render(){
        return(
            <button
            onMouseEnter={this.mouseEnter} 
            onMouseLeave={this.mouseLeave} 
            onClick={() => this.props.selectPage(this.props.pageIndex)}
            >
                <div className={this.isVisible()}>{this.props.buttonName}</div>
                <i className={this.props.buttonIcon}></i>
            </button>
        )
    }
    
    
}

export default connect(null, { selectPage })(SidebarButton);