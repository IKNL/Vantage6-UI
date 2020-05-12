import React from 'react';
import { connect } from 'react-redux';

import trolltunga from '../images/trolltunga.jpg';
import cuppolone from '../images/cuppolone.jpg';
import taipei101 from '../images/taipei101.png';
import logo from '../images/artboard1.png';
import { logIn } from '../actions';

class Login extends React.Component{

    getRandomImage(){
        const random = Math.random();
        
        if(random <= 0.33){
            return trolltunga;
        }else if(random <= 0.66){
            return cuppolone;
        }else{
            return taipei101;
        }
    }

    render(){
        console.log(this.props)

        return (
                <div className="nine wide column login-panel">
                    <img className="login-background-image" src={this.getRandomImage()} alt="background"/>
                    <div className="login-overlay"></div>
                   
                    <form className="ui large form">
                        <div className="ui stacked segment">
                        <img className="ui center aligned grid" src={logo} height='270' alt="logo" />
                            <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input type="text" name="email" placeholder="E-mail address" />
                            </div>
                            </div>
                            <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="password" placeholder="Password" />
                            </div>
                            </div>
                            <div className="ui fluid large submit button"
                            onClick={this.props.logIn}>Login</div>
                        </div>
                        <div className="ui error message"></div>
                    </form>
                </div>
            );
        }
    }


const mapStateToProps = (state) => {
    return { token: state.token };
}

export default connect(mapStateToProps, { logIn })(Login);
