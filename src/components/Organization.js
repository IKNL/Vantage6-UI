import React from 'react';

class Organization extends React.Component{

    state = {active: false}

    toggleContent(){
        this.setState({active: !this.state.active});
    }

    renderContent(){
        if(this.state.active){
            return (
                <div>
                    Organization content goes here
                </div> 
            );
        }else{
            return null;
        }
    }

    render(){
        return (
            <div className="ui raised fluid card highlight-hover">
                        <div className="content vertical segment">
                                <div className="ui left floated" onClick={() => this.toggleContent()}>
                                <h2 className="ui header" >
                                    <i className="building icon"></i>
                                    <div className="content">
                                        {this.props.name}
                                        <div className="sub header">{this.props.id}</div>
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
