import React from 'react';
import { connect } from 'react-redux';
import OrgHeader from '../OrgHeader';

const NodeDetail = ({selectedNode, nodes}) => {

    if (!selectedNode){
        return <div>Select a node</div>
    }

    let node = nodes.filter(x => x.id === selectedNode)[0];
    let color = (node.status == "online") ? "green" : "red"
    let date = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "CET",
        timeZoneName: "short"
      }).format(Date.parse(node.last_seen))

    return (
        <div className="ui segment fluid">
            <div className="ui items">
                <div className="item">
                    <div className="content">
                        <div className="ui header v6-blue">{node.name}</div>
                        <a class="ui label">node id:{node.id}</a>
                        <a className={`ui label ${color}`}>{node.status}</a>
                        <div className="ui segment">
                            <div class="ui list divided relaxed">
                                <div class="item">
                                    <i class="clock icon"></i>
                                    <div class="content">
                                    Last sign on <b>{date}</b>
                                    </div>
                                </div>
                                <div class="item">
                                    <i class="key icon"></i>
                                    <div class="content">
                                    API key <b>{node.api_key}</b>
                                    </div>
                                </div>
                                <div class="item">
                                    <i class="thumbtack icon"></i>
                                    <div class="content">
                                    IP <b>{node.ip}</b>
                                    </div>
                                </div>
                                <div class="item">
                                    <i class="thumbtack icon"></i>
                                    <div class="content">
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
