import React from 'react';
import { connect } from 'react-redux';

const AlgorithmDetail = ({selectedAlgorithm, algorithms}) => {

    if (!selectedAlgorithm){
        return <div>Select an algorithm</div>
    }
    
    var shownAlgorithm = algorithms.filter(x => x.id === selectedAlgorithm);

    return (
        <div className="ui segment fluid">
            
            <div className="content">
                    <div className="summary">
                    {shownAlgorithm[0].status}
                    </div>
            </div>
            <br></br>
            <div className="content">
                <div className="ui header">{shownAlgorithm[0].name}</div>
            </div>
        </div>
        );
};

const mapStateToProps = (state) => {
    return { selectedAlgorithm: state.selectedAlgorithm, algorithms: state.algorithms }
};

export default connect(mapStateToProps)(AlgorithmDetail);
