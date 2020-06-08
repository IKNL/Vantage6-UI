import React from 'react';
import { connect } from 'react-redux';
import { selectNode, fetchAllContent } from '../../actions';

class AlgorithmList extends React.Component {

    componentDidMount(){
        this.props.fetchAllContent();
    }

    renderList(){

        return this.props.algorithms.map((algo, props) => {
            if(algo.id !== null){
                return (
                    <div className="item" key={algo.id}
                    onClick={() => this.props.selectNode(algo.id)}
                    >
                        <i className="superscript icon yellow middle aligned"></i>
                        <div className="content">
                            <div className="ui sub header user-name">
                                {algo.name} 
                            </div>
                            <div className="ui sub header user-role">
                                {algo.status}
                            </div>
                        </div>
                    </div>            
                );
            }
            
        });
    }

    render(){
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { algorithms: state.algorithms, selectedAlgorithm: state.selectedAlgorithm };
}

export default connect(mapStateToProps, { fetchAllContent })(AlgorithmList);
