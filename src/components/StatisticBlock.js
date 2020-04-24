import React from 'react';

const StatisticBlock = () => {
    return (
        <div className="ui doubling four column grid statistics cards">
            <div className="column">
                <div className="statistic ui raised fluid card">
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
                <div className="statistic ui raised fluid card">
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
                <div className="statistic ui raised fluid card">
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
                <div className="statistic ui raised fluid card">
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

export default StatisticBlock;