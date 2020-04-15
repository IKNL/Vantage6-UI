import React from 'react';
import { connect } from 'react-redux';

import logo from './artboard1.png';
import { logIn } from '../actions';

class Login extends React.Component{

    render(){
        console.log(this.props)

        return (
                <div className="nine wide column">
                    <img src={logo} height='200' alt="logo" />
                    <form className="ui large form">
                        <div className="ui stacked segment">
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
