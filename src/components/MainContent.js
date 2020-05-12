import React from 'react';
import { connect } from 'react-redux';

import StatisticBlock from './StatisticBlock';
import ItemSummary from './ItemSummary';
import UserContent from './ContentManagers/UserContent';
import ResultContent from './ContentManagers/ResultContent';
import NodeContent from './ContentManagers/NodeContent';

const MainContent = ({selectedPage}) => {

    if(selectedPage === 0){ //HOME
        return(
            <div>
                <div className="content main-content">
                    <StatisticBlock />
                    <ItemSummary />
                </div>
            </div>          
        );
    }else if(selectedPage === 1){ //USERS
        return(
            <UserContent />
        );
    }else if(selectedPage === 2){ //RESULTS
        return(
            <ResultContent />  
        );
    }else if(selectedPage === 3){ //ALGORITHMS
        return(
            <div>
                <div className="content main-content">
                    3 selected
                </div>
            </div>          
        );
    }else if(selectedPage === 4){ //TASKS
        return(
            <div>
                <div className="content main-content">
                    4 selected
                </div>
            </div>          
        );
    }else if(selectedPage === 5){ //NODES
        return(
            <NodeContent /> 
        );
    }else if(selectedPage === 6){ //COLLABORATIONS
        return(
            <div>COLLABORATIONS selected</div>
        );
    }


    return(
        <div>
            <div className="content main-content">
                <StatisticBlock />
                <ItemSummary />
            </div>
        </div>          
    );
    
    
};
const mapStateToProps = (state) => {
    return { selectedPage: state.selectedPage }
};

export default connect(mapStateToProps)(MainContent);
