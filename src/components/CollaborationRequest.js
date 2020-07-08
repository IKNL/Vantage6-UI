import React from 'react';


class CollaborationRequest extends React.Component{

    state = {active: false}

    toggleContent(){
        this.setState({active: !this.state.active});
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
            <div className="ui raised fluid card" onClick={() => this.toggleContent()}>
                        <div className="content vertical segment" >
                                <div className="ui left floated">
                                <h2 class="ui header">
                                    <i class="exchange icon"></i>
                                    <div class="content">
                                        {this.props.name}
                                        <div class="sub header">{this.props.id}</div>
                                    </div>
                                </h2>
                                </div>
                                <div className="ui right floated">
                                    <div className="you-pill">You</div>
                                    <i className="ui icon circle red"></i>
                                    <i className="ui icon circle red"></i>
                                    <i className="ui icon circle green"></i>
                                    <i className="ui icon circle green"></i>
                                </div>
                            
                        </div>    
                        <div className="divider"></div>
                        {this.renderContent()}
                            
                    </div>    
        );
    }
}


export default CollaborationRequest;
