import React from 'react';
import { connect } from 'react-redux';
import OrgIcon from '../OrgIcon';
import NodeIcon from '../NodeIcon';




const ResultDetail = ({selectedResult, results}) => {

    function FormatTimestamp(timestamp){
        if(timestamp){
            var time = new Date(timestamp);
            return <b className="ui basic green button">{time.toLocaleString('NL')}</b>;
        }else{
            return <b className="ui basic red button">NA</b>;
        }
    }

    if (!selectedResult){
        return <div>Select a result to view its details</div>
    }
    
    var showResult = results.filter(x => x.id === selectedResult);
    console.log(showResult[0]);



    return (
        <div className="ui segment fluid">
            <h4 className="ui header">TASK {showResult[0].id}</h4>
            <div className="ui small feed">
                <div className="event">
                    <div className="content">
                    <div className="header">
                        Issued by <OrgIcon orgID={showResult[0].organization.id} /> on <NodeIcon nodeID={showResult[0].organization.id} />
                    </div>
                    </div>
                </div>
                <div className="event">
                    <div className="content">
                    <div className="header">
                        Issued: {FormatTimestamp(showResult[0].assigned_at)}
                    </div>
                    </div>
                </div>
                <div className="event">
                    <div className="content">
                    <div className="header">
                        Completed: {FormatTimestamp(showResult[0].finished_at)}
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
