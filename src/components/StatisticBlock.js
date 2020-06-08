import React from 'react';
import { connect  } from 'react-redux';

import { selectPage } from '../actions';
import Statistic from './Statistic';

const StatisticBlock = (props) => {
    return (
        <div className="ui doubling four column grid statistics cards">
            <Statistic uiClasses="users icon" onClickFunction={1} blockName="USERS" blockCount={props.users.length} selectPage={props.selectPage} />
            <Statistic uiClasses="server icon" onClickFunction={5} blockName="NODES" blockCount={props.nodes.length} selectPage={props.selectPage} />
            <Statistic uiClasses="calculator icon" onClickFunction={2} blockName="COMPUTATIONS" blockCount={props.results.length} selectPage={props.selectPage} />
            <Statistic uiClasses="handshake icon" onClickFunction={6} blockName="COLLABORATIONS" blockCount={props.collaborations.length} selectPage={props.selectPage} />
        </div>
            

    );
}

const mapStateToProps = (state) => {
    return { results: state.results, users: state.users, collaborations: state.collaborations, nodes: state.nodes };
}

export default connect(mapStateToProps, { selectPage })(StatisticBlock);