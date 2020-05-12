import React from 'react';
import { connect } from 'react-redux';

import NodeList from './Lists/NodeList';
import ResultList from './Lists/ResultList';
import CollaborationList from './Lists/CollaborationList';
import { selectPage } from '../actions';

const ItemSummary = (props) => {
    return (
        <div>
            <div className="ui doubling two column grid statistics cards">
                <div className="column">
                    <div className="statistic ui raised fluid card">
                        <h2 className="ui left aligned header">
                        NODES
                        </h2>
                        <NodeList />
                        <button className="ui button"
                        onClick={() => props.selectPage(5)}
                        >View all nodes</button>
                    </div>
                </div>
                <div className="column">
                    <div className="statistic ui raised fluid card">
                        <h2 className="ui left aligned header">
                        LATEST RESULTS
                        </h2>
                        <ResultList listLength={3} />
                        <button className="ui button"
                        onClick={() => props.selectPage(2)}
                        >View all results</button>
                    </div>
                </div>
            </div>
            <div className="ui one column grid cards">
                <div className="column">
                    <div className="statistic ui raised fluid card">
                        <h2 className="ui left aligned header">
                        COLLABORATIONS
                        </h2>
                        <CollaborationList />
                        <button className="ui button"
                        onClick={() => props.selectPage(6)}
                        >View all collaborations</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { selectedPage: state.selectedPage }
}

export default connect(mapStateToProps, { selectPage })(ItemSummary);