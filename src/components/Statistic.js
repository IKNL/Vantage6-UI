import React from 'react';

const Statistic = (props) => {
    return (
            <div className="column">
                <div className="statistic ui raised fluid card"
                onClick={() => props.selectPage(props.onClickFunction)}>
                    <h2 className="ui center aligned icon header">
                    <i className={props.uiClasses}></i>
                    {props.blockName}
                    </h2>
                    <div className="value">
                    {props.blockCount}
                    </div>
                </div>
            </div>
    );
}


export default Statistic;