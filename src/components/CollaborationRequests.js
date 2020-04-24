import React from 'react';

const CollaborationRequests = () => {
    return (
        <div className="ui one column grid statistics cards">
            <div className="column">
            <div className="ui fluid card">
                <div className="content">
                <h2 className="ui left aligned header">
                    COLLABORATION REQUESTS
                </h2>
                </div>
                <div className="content">
                    <div className="ui feed">
                    <div className="event">
                        <div className="content">
                        <div className="summary">
                            <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
                        </div>
                        </div>
                    </div>
                    <div className="event">
                        <div className="content">
                        <div className="summary">
                            <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
                        </div>
                        </div>
                    </div>
                    <div className="event">
                        <div className="content">
                        <div className="summary">
                            <a>Helen Troy</a> added two pictures
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="extra content">
                    <button className="ui button">View all</button>
                </div>
                </div>
            </div>
        </div>
            

    );
}

export default CollaborationRequests;