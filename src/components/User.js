import React from 'react';

class User extends React.Component{

    state = {active: false}

    toggleContent(){
        this.setState({active: !this.state.active});
    }

    userIcon(role){
        switch(role){
            case('admin'):
                return (<i className='chess king icon' />);
            case('researcher'):
                return (<i className='chess knight icon' />);
            default:
                return <i className='chess pawn icon' />;
        }
    }

    renderContent(){
        if(this.state.active){
            return (
                <div>
                    <div className="ui divider"></div> 
                    <div className="collaboration-block-content">
                        <span className="ui sub header">{this.props.contact}</span>
                        <br /><br />
                        Roles: <button className="ui button secondary basic"> {this.props.roles} </button>
                        <button className="ui button secondary basic">+</button>
                        <br /> <br /> 
                        Extras: <button className="ui button secondary basic"> {this.props.extras} </button> 
                        <button className="ui button secondary basic">+</button>
                    </div>
                    <br />
                    <button className="ui button yellow" onClick={() => {
                            this.props.selectUser(this.props.id) 
                            this.props.selectPage(7)
                            }
                        }   
                        >edit</button>
                </div> 
            );
        }else{
            return null;
        }
    }

    render(){
        return (
            <div className="ui segment fluid">
                        <h4 className="ui header highlight-hover" onClick={() => this.toggleContent()} >
                            {this.userIcon(this.props.roles)}
                            <div className="content header">
                                {this.props.firstname} {this.props.lastname} 
                                <div className="sub header">{this.props.roles}</div>
                            </div>
                        </h4>
   
                        <div className="divider"></div>
                        {this.renderContent()}
                            
                    </div>    
        );
    }
}


export default User;
