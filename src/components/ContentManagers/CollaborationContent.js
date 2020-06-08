import React from 'react';

import CollaborationList from '../Lists/CollaborationList';
import CollaborationRequests from '../Lists/CollaborationRequests';

const CollaborationContent = () => {
    return(
        <div>
                <div className="content main-content">
                    <div className="ui one column grid">
                        <div className="column">
                            <h2 className="ui left aligned header">
                            NEW REQUESTS
                            </h2>
                            <div className="ui raised fluid card">
                            <CollaborationRequests />
                            </div>

                            <h2 className="ui left aligned header">
                            COLLABORATIONS
                            </h2>
                            <div className="ui raised fluid card">
                            <CollaborationList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
    );
}

export default CollaborationContent;