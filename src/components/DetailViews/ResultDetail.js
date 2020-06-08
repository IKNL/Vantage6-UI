import React from 'react';
import { connect } from 'react-redux';
import OrgIcon from '../OrgIcon';

const ResultDetail = ({selectedResult, results}) => {

    if (!selectedResult){
        return <div>Select a result to view its details</div>
    }
    
    var showResult = results.filter(x => x.id === selectedResult);
    return (
        <div className="ui segment fluid">
            <h4 className="ui header">TASK {showResult[0].id}</h4>
            <div className="ui small feed">
                <div className="event">
                    <div className="content">
                    <div className="header">
                        Issuing organization: <OrgIcon orgID={showResult[0].organization.id} />
                    </div>
                    </div>
                </div>
                <div className="event">
                    <div className="content">
                    <div className="header">
                        Issued: <b>{showResult[0].assigned_at}</b>
                    </div>
                    </div>
                </div>
                <div className="event">
                    <div className="content">
                    <div className="header">
                        Completed: {showResult[0].finished_at}
                    </div>
                    </div>
                </div>
                <div className="event">
                    <div className="content">
                    <div className="summary">
                        Input: {showResult[0].input}
                    </div>
                    </div>
                </div>
            </div>
        </div>
        );
};

const mapStateToProps = (state) => {
    return { selectedResult: state.selectedResult, results: state.results }
};

export default connect(mapStateToProps)(ResultDetail);
