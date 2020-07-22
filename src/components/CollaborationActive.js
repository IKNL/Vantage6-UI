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

    showTaskCount(){
        if(!this.state.active){
            return <div className="ui button tiny right floated collaboration-button">{this.props.tasks.length}</div>;
        }else{
            return null;
        }
    }

    render(){
        return (
            <div className="ui raised fluid card">
                <div className="collaboration-block content vertical segment" onClick={() => this.toggleContent()}>
                    <div className="ui left floated">
                        <h4 class="ui header" >
                            <i class="ui circle icon green"></i>
                            {this.props.name}
                        </h4>
                    </div>
                    
                    {this.showTaskCount()}
                </div>    
                
                {this.renderContent()}
            </div>      
        );
    }
}


export default CollaborationActive;
