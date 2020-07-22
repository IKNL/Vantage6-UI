import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import StatisticBlock from './StatisticBlock';
import ItemSummary from './ItemSummary';
import UserContent from './ContentManagers/UserContent';
import ResultContent from './ContentManagers/ResultContent';
import NodeContent from './ContentManagers/NodeContent';
import AlgorithmContent from './ContentManagers/AlgorithmContent';
import CollaborationContent from './ContentManagers/CollaborationContent';
import ProfileContent from './ContentManagers/ProfileContent';
import OrganizationContent from './ContentManagers/OrganizationContent';

const MainContent = ({selectedPage}) => {

    if(selectedPage === 0){ //HOME
        return(
            <div>
                <div className="content main-content">
                    <Header />
                    <StatisticBlock />
                    <ItemSummary />
                </div>
            </div>          
        );
    }else if(selectedPage === 1){ //USERS
        return(
            <UserContent />
        );
    }else if(selectedPage === 2){ //COMPUTATIONS
        return(
            <ResultContent />  
        );
    }else if(selectedPage === 3){ //ALGORITHMS
        return(
            <AlgorithmContent />       
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
            <CollaborationContent />
        );
    }else if(selectedPage === 7){
        return(
            <ProfileContent />
        );
    }else if(selectedPage === 8){
        return(
            <OrganizationContent />
        );
    }else if(selectedPage === 9){
        return <OrganizationContent />
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
