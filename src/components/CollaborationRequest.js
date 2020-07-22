import React from 'react';


class CollaborationRequest extends React.Component{

    state = {active: false}

    toggleContent(){
        this.setState({active: !this.state.active});
    }

    renderOrgCircles(){
            return this.props.organizations.map((org) => {
                if(org.id !== 1){
                    return (
                        <i className="ui icon circle red"></i>
                    );
                }else{
                    return (
                        <i className="ui icon circle green"></i>
                    );
                }
            });
    }

    renderContent(){
        if(this.state.active){
            return (
                <div className="ui vertical segment">   
                <div className="ui placeholder vertical segment">
                    <div className="ui icon header">
                    <i className="pdf file outline icon"></i>
                    No documents are listed for this collaboration.
                    </div>
                    <div className="ui primary button">Add Document</div>
                </div>
                <div className="ui vertical segment">
                    <p>Algorithms: <span className="ui button">CoxPH</span><span className="ui button">LOGR</span></p>
                    <br />
                    <button className="ui button red">Reject</button><button className="ui button green">Accept</button>
                </div>
                </div>
            );
        }else{
            return null;
        }
    }

    render(){
        return (
            <div className="ui raised fluid card">
                        <div className="content vertical segment" onClick={() => this.toggleContent()}>
                                <div className="ui left floated">
                                    <h4 class="ui header" >
                                        <div class="content">
                                            {this.props.name}
                                        </div>
                                    </h4>
                                </div>
                                <div className="ui right floated">
                                    <div className="you-pill">You</div>
                                    {this.renderOrgCircles()}
                                </div>
                            
                        </div>    
                        <div className="divider"></div>
                        {this.renderContent()}
                            
                    </div>    
        );
    }
}


export default CollaborationRequest;
