import React from 'react';

import ResultList from '../Lists/ResultList';
import ResultDetail from '../DetailViews/ResultDetail';
// import ResultDetail from '../ResultDetail';

const ResultContent = () => {
    return(
        <div>
                <div className="content main-content">
                    <div className="ui two column grid">
                        <div className="column">
                        <h2 className="ui left aligned header">
                        LATEST RESULTS
                        </h2>
                            <div className="ui raised fluid card">
                            <ResultList listLength={15} />
                            </div>
                        </div>
                        <div className="column">
                        <h2 className="ui left aligned header">
                        SELECTED RESULT
                        </h2>
                        <ResultDetail />
                        </div>
                    </div>
                </div>
            </div>         
    );
}

export default ResultContent;