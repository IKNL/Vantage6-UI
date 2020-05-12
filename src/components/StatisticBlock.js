import React from 'react';
import { connect  } from 'react-redux';

import { selectPage } from '../actions';

const StatisticBlock = ({selectPage}) => {
    return (
        <div className="ui doubling four column grid statistics cards">
            <div className="column">
                <div className="statistic ui raised fluid card"
                onClick={() => selectPage(1)}>
                    <h2 className="ui aligned icon header">
                    <i className="users icon"></i>
                    USERS
                    </h2>
                    <div className="value">
                    14
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="statistic ui raised fluid card"
                onClick={() => selectPage(5)}>
                    <h2 className="ui center aligned icon header">
                    <i className="server icon"></i>
                    NODES
                    </h2>
                    <div className="value">
                    4
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="statistic ui raised fluid card"
                onClick={() => selectPage(2)}>
                    <h2 className="ui center aligned icon header">
                    <i className="calculator icon"></i>
                    COMPUTATIONS
                    </h2>
                    <div className="value">
                    1024
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="statistic ui raised fluid card"
                onClick={() => selectPage(6)}>
                    <h2 className="ui center aligned icon header">
                    <i className="handshake icon"></i>
                    COLLABORATIONS
                    </h2>
                    <div className="value">
                    4
                    </div>
                </div>
            </div>
        </div>
            

    );
}


export default connect(null, { selectPage })(StatisticBlock);