import React from 'react';

class Organization extends React.Component{

    state = {active: false}

    toggleContent(){
        this.setState({active: !this.state.active});
    }

    renderNodeBlocks(){
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
                <div>
                    <div className="ui divider"></div> 
                    <div className="collaboration-block-content">
                        Organizations: {this.props.users}
                        <br /> <br /> 
                        Nodes: {this.props.nodes}
                    </div>
                </div> 
            );
        }else{
            return null;
        }
    }

    render(){
        return (
            <div className="ui raised card">
                        <div className="content vertical segment" onClick={() => this.toggleContent()}>
                                <div className="ui left floated">
                                <h2 class="ui header" >
                                    <i class="exchange icon"></i>
                                    <div class="content">
                                        {this.props.name}
                                        <div class="sub header">{this.props.id}</div>
                                    </div>
                                </h2>
                                </div>
                        </div>    
                        <div className="divider"></div>
                        {this.renderContent()}
                            
                    </div>    
        );
    }
}


export default Organization;
