import React from 'react';


class CollaborationActive extends React.Component{

    state = {active: false}

    toggleContent(){
        this.setState({active: !this.state.active});
    }

    renderContent(){
        if(this.state.active){
            return (
            <div>
                <div className="ui divider"></div> 
                <div className="collaboration-block-content">
                    Organizations: {this.props.organizations}
                    <br /> <br /> 
                    Computations: <div className="ui button yellow">{this.props.tasks.length}/{this.props.tasks.length}</div>
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
                <div className="collaboration-block">
                    <div className="ui left floated">
                    <h2 class="ui header">
                        <i class="circle icon green"></i>
                        <div class="content">
                            {this.props.name}
                            <div class="sub header">{this.props.id}</div>
                        </div>
                    </h2>
                    </div>
                    <i className="ui middle aligned right floated big angle down icon" onClick={() => this.toggleContent()}></i>
                    <div className="ui button right floated collaboration-button">{this.props.tasks.length}</div>
                </div>    
                
                {this.renderContent()}
            </div>      
        );
    }
}


export default CollaborationActive;
