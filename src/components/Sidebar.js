import React from 'react';
import { connect } from 'react-redux';

import { selectPage } from '../actions';

class Sidebar extends React.Component {
    
    render(){
        return (
            <div className="Sidebar">
                <button 
                onClick={() => this.props.selectPage(0)}
                >
                    <i className="home icon"></i>
                </button>
                <button className="ui icon standard"
                onClick={() => this.props.selectPage(1)}
                >
                    <i className="user icon"></i>
                </button>
                <button className="ui icon standard"
                onClick={() => this.props.selectPage(2)}
                >
                    <i className="chart bar icon"></i>
                </button>
                <button className="ui icon standard"
                onClick={() => this.props.selectPage(3)}
                >
                    <i className="superscript icon"></i>
                </button>
                <button className="ui icon"
                onClick={() => this.props.selectPage(4)}
                >
                    <i className="recycle icon"></i>
                </button>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { selectedPage: state.selectedPage }
}

export default connect(mapStateToProps, { selectPage })(Sidebar);