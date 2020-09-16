import React from 'react';
import { connect } from 'react-redux';
import { fetchOrg } from '../actions';
import { isEmpty } from 'lodash';

class Organization extends React.Component{

    constructor(props){
        super(props)
        this.state = {active: false}
        if (!isEmpty(props.user.organization)){
            this.props.fetchOrg(props.user.organization.id)
        }

    }
    render(){

        const { organization } = this.props;

        if (isEmpty(organization)){
            return "Loading..."
        }

        return (

            <div className="ui segments">
                <div className="ui segment">
                    <h2 className="ui header v6-blue" >
                        <div className="ui label horizontal">
                            ID <div className="detail">{ organization.id }</div>
                        </div>
                        { organization.name }
                    </h2>
                    <div className="ui segment">
                        <div className="ui list very relaxed">
                            <div className="item">
                                <i className="tag icon"></i>
                                <div className="content">
                                    Domain <b>{ organization.domain }</b>
                                </div>
                            </div>
                            <div className="item">
                                <i className="building icon"></i>
                                <div className="content">
                                    Address <b>{ organization.address1 }, {organization.zipcode}</b>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    Zipcode <b>{ organization.zipcode }</b>
                                </div>
                            </div>
                            <div className="sub header"></div>
                        </div>
                    </div>
                </div>

                <div className="ui segment secondary">
                    <h2 className="ui header">Public key</h2>
                    <div className="pub-key">{ organization.public_key }</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { organization: state.organization, user: state.user };
}


export default connect(mapStateToProps, {fetchOrg} )(Organization);
