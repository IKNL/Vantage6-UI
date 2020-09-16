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
import CreateCollabForm from './Forms/CreateCollabForm';
import { selectOrg } from '../actions';

const MainContent = ({selectedPage, selectOrg}) => {

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
    }else if(selectedPage === 5){ //NODES
        return(
            <NodeContent />
        );
    }else if(selectedPage === 6){ //COLLABORATIONS
        return(
            <CollaborationContent />
        );
    }else if(selectedPage === 7){ // USER PROFILE
        return(
            <ProfileContent />
        );
    }else if(selectedPage === 8){ // OWN ORGANIZATION PAGE
        selectOrg(1);
        return(
            <OrganizationContent ownOrg={true} />
        );
    }else if(selectedPage === 9){ // ORGANIZATION PAGE GENERAL
        selectOrg(null);
        return (
            <OrganizationContent />
        );
    }else if(selectedPage === 10){ // CREATE NEW COLLABORATION
        return(
            <CreateCollabForm />
        );
    }

    return(
        <NodeContent />
    );

};
const mapStateToProps = (state) => {
    return { selectedPage: state.selectedPage }
};

export default connect(mapStateToProps, {selectOrg})(MainContent);
