import React from 'react';

const CollaborationRequests = () => {
    return (
        <div className="ui one column grid statistics cards">
            <div className="column">
            <div class="ui fluid card">
                <div class="content">
                <h2 class="ui left aligned header">
                    COLLABORATION REQUESTS
                </h2>
                </div>
                <div class="content">
                    <div class="ui feed">
                    <div class="event">
                        <div class="content">
                        <div class="summary">
                            <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
                        </div>
                        </div>
                    </div>
                    <div class="event">
                        <div class="content">
                        <div class="summary">
                            <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
                        </div>
                        </div>
                    </div>
                    <div class="event">
                        <div class="content">
                        <div class="summary">
                            <a>Helen Troy</a> added two pictures
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="extra content">
                    <button class="ui button">View all</button>
                </div>
                </div>
            </div>
        </div>
            

    );
}

export default CollaborationRequests;