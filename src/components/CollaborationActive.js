import React from 'react';


class CollaborationActive extends React.Component{

    state = {active: false}

    toggleContent(){
        this.setState({active: !this.state.active});
    }

    getCircle(){
        
        for (let index = 0; index < this.props.organizations.length; index++) {
            const element = this.props.organizations[index];
            // check for active state of organization/node here
            if(!element){
                return (<i className="ui circle icon red"></i>);
            }
            
        }
        return (<i className="ui circle icon green"></i>);
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
                <div className="collaboration-block content vertical segment highlight-hover" onClick={() => this.toggleContent()}>
                    <div className="ui left floated">
                        <h4 className="ui header" >
                            {this.getCircle()}
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
