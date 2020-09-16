import React from 'react';

import NodeLists from '../NodeLists'
import NodeDetail from '../DetailViews/NodeDetail';

const NodeContent = () => {
    return(
        <div>
            <div className="content main-content">
                <div className="ui two column grid">
                    <div className="column">
                        <NodeLists />
                    </div>
                    <div className="column">
                    <h2 className="ui left aligned header">
                        Selected node
                    </h2>
                    <NodeDetail />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NodeContent;