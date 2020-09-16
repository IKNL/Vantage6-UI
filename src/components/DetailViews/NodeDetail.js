import React from 'react';
import { connect } from 'react-redux';
import parse_date from '../../actions/date'

const NodeDetail = ({selectedNode, nodes}) => {

    if (!selectedNode){
        return <div className="ui segment">Select a node</div>
    }

    let node = nodes.filter(x => x.id === selectedNode)[0];
    let color = (node.status == "online") ? "green" : "red"
    let date = parse_date(node.last_seen)

    return (
        <div className="ui segment fluid">
            <div className="ui items">
                <div className="item">
                <div className={`ui label ${color} top attached`}>{node.status}</div>
                    <div className="content">
                        <div className="ui label horizontal">ID<div className="detail">{node.id}</div></div>
                        <div className="ui header v6-blue">{node.name}</div>
                        <div className="ui segment">
                            <div className="ui list very relaxed">
                                <div className="item">
                                    <i className="clock icon"></i>
                                    <div className="content">
                                    Last sign on <b>{date}</b>
                                    </div>
                                </div>
                                <div className="item">
                                    <i className="key icon"></i>
                                    <div className="content">
                                    API key <b>{node.api_key}</b>
                                    </div>
                                </div>
                                <div className="item">
                                    <i className="thumbtack icon"></i>
                                    <div className="content">
                                    IP <b>{node.ip}</b>
                                    </div>
                                </div>
                                <div className="item">
                                    <i className="thumbtack icon"></i>
                                    <div className="content">
                                    Collaboration ID <b>{node.collaboration.id}</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
};

const mapStateToProps = (state) => {
    return { selectedNode: state.selectedNode, nodes: state.nodes }
};

export default connect(mapStateToProps)(NodeDetail);
