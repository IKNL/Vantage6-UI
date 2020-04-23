import React from 'react';
import { connect } from 'react-redux';

import StatisticBlock from './StatisticBlock';
import ItemSummary from './ItemSummary';
import CollaborationRequests from './CollaborationRequests';
import UserList from './UserList';
import UserDetail from './UserDetail';

const MainContent = ({selectedPage}) => {

    if(selectedPage === 0){ //HOME
        return(
            <div>
                <div className="content main-content">
                    <StatisticBlock />
                    <ItemSummary />
                    <CollaborationRequests />
                </div>
            </div>          
        );
    }else if(selectedPage === 1){ //USERS
        return(
            <div>
                <div className="content main-content">
                    <div className="ui two column grid">
                        <div className="column">
                        <UserList />
                        </div>
                        <div className="column">
                        <UserDetail />
                        </div>
                    </div>
                </div>
            </div>          
        );
    }else if(selectedPage === 2){ //RESULTS
        return(
            <div>
                <div className="content main-content">
                    2 selected
                </div>
            </div>          
        );
    }else if(selectedPage === 3){ //ALGORITHMS
        return(
            <div>
                <div className="content main-content">
                    3 selected
                </div>
            </div>          
        );
    }else if(selectedPage === 4){ //COLLABORATIONS
        return(
            <div>
                <div className="content main-content">
                    4 selected
                </div>
            </div>          
        );
    }


    return(
        <div>
            <div className="content main-content">
                <StatisticBlock />
                <ItemSummary />
                <CollaborationRequests />
            </div>
        </div>          
    );
    
    
};
const mapStateToProps = (state) => {
    return { selectedPage: state.selectedPage }
};

export default connect(mapStateToProps)(MainContent);
