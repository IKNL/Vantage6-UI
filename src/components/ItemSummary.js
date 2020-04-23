import React from 'react';
import NodeList from './NodeList';
import ResultList from './ResultList';

const ItemSummary = () => {
    return (
        <div className="ui two column grid statistics cards">
            <div className="column">
                <div className="statistic ui raised fluid card">
                    <h2 class="ui left aligned header">
                    NODES
                    </h2>
                    <NodeList />
                    <button className="ui button">View all nodes</button>
                </div>
            </div>
            <div className="column">
                <div className="statistic ui raised fluid card">
                    <h2 class="ui left aligned header">
                    LATEST RESULTS
                    </h2>
                    <ResultList />
                    <button className="ui button">View all results</button>
                </div>
            </div>
        </div>
            

    );
}

export default ItemSummary;