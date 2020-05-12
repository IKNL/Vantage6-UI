import React from 'react';

import NodeList from '../Lists/NodeList';
import NodeDetail from '../DetailViews/NodeDetail';

const NodeContent = () => {
    return(
        <div>
                <div className="content main-content">
                    <div className="ui two column grid">
                        <div className="column">
                            <h2 className="ui left aligned header">
                            NODES
                            </h2>
                            <div className="ui raised fluid card">
                            <NodeList />
                            </div>
                        </div>
                        <div className="column">
                        <h2 className="ui left aligned header">
                        SELECTED NODE
                        </h2>
                        <NodeDetail />
                        </div>
                    </div>
                </div>
            </div>          
    );
}

export default NodeContent;