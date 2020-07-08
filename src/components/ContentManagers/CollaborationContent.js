import React from 'react';

import CollaborationList from '../Lists/CollaborationList';
import CollaborationRequests from '../Lists/CollaborationRequests';

const CollaborationContent = () => {
    return(
        <div>
                <div className="content main-content">
                    <div className="ui two column grid">
                        <div className="column">
                            <h2 className="ui left aligned header">
                            ACTIVE COLLABORATIONS
                            </h2>
                            <CollaborationList />
                        </div>
                        <div className="column">
                            <h2 className="ui left floated header">
                            WAITING FOR APPROVAL
                            </h2>
                            <button className="ui right floated secondary basic button">
                            Create new collaboration <i className="ui small icon plus"></i>
                            </button>

                            <CollaborationRequests />
                        </div>
                    </div>
                </div>
            </div>          
    );
}

export default CollaborationContent;