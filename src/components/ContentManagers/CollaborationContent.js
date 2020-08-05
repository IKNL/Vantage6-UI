import React from 'react';
import { connect } from 'react-redux';

import CollaborationList from '../Lists/CollaborationList';
import CollaborationRequests from '../Lists/CollaborationRequests';

import { selectPage } from '../../actions';


const CollaborationContent = (props) => {
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
                            <button className="ui right floated secondary basic button" onClick={() => props.selectPage(10)}>
                            Create new collaboration <i className="ui small icon plus"></i>
                            </button>

                            <CollaborationRequests />
                        </div>
                    </div>
                </div>
            </div>          
    );
}



export default connect( null, {selectPage})(CollaborationContent);