import React from 'react';

const StatisticBlock = () => {
    return (
        <div className="ui four column grid statistics cards">
            <div className="column">
                <div className="statistic ui raised fluid card">
                    <h2 class="ui aligned icon header">
                    <i class="users icon"></i>
                    USERS
                    </h2>
                    <div className="value">
                    14
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="statistic ui raised fluid card">
                    <h2 class="ui center aligned icon header">
                    <i class="server icon"></i>
                    NODES
                    </h2>
                    <div className="value">
                    4
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="statistic ui raised fluid card">
                    <h2 class="ui center aligned icon header">
                    <i class="calculator icon"></i>
                    COMPUTATIONS
                    </h2>
                    <div className="value">
                    1024
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="statistic ui raised fluid card">
                    <h2 class="ui center aligned icon header">
                    <i class="handshake icon"></i>
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