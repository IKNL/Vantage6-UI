import React from 'react';

import AlgorithmList from '../Lists/AlgorithmList';
import AlgorithmDetail from '../DetailViews/AlgorithmDetail';

const AlgorithmContent = () => {
    return(
        <div>
                <div className="content main-content">
                    <div className="ui two column grid">
                        <div className="column">
                            <h2 className="ui left aligned header">
                            ALGORITHMS
                            </h2>
                            <div className="ui raised fluid card">
                            <AlgorithmList />
                            </div>
                        </div>
                        <div className="column">
                        <h2 className="ui left aligned header">
                        SELECTED ALGORITHM
                        </h2>
                        <AlgorithmDetail />
                        </div>
                    </div>
                </div>
            </div>          
    );
}

export default AlgorithmContent;