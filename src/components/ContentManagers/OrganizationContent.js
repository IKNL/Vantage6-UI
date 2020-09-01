import React from 'react';
import { connect } from 'react-redux';

import Statistic from '../Statistic';
import { selectOrg, fetchAllContent } from '../../actions';
import UserList from '../Lists/UserList';
import OrganizationList from '../Lists/OrganizationList';


class OrganizationContent extends React.Component {
    
    componentDidMount(){
        if(!this.props.selectedOrg && this.props.ownOrg){
            this.props.selectOrg(1);
        }else{
            this.props.selectOrg(null);
        }
    }

    renderInput = ({ input, label, placeholder, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{ label }</label>
                <input placeholder={ placeholder } {...input} />
                {this.renderError(meta)}
            </div>
        )
    }

    render(){

            var org = this.props.orgs.filter(x => x.id === this.props.selectedOrg);
            if(org){
                org = org[0];

                return(
                    <div className="ui grid two column">
                        <div className="ui column"></div>
                        <div className="ui column">
                            <div className="segment right floated">
                                <button className="ui secondary basic button two wide column">
                                        <i className="user circle icon left floated"></i>
                                        <div className="">
                                            Create new
                                            <div className="">USER</div>
                                        </div>
                                </button>   
                                <button className="ui secondary basic button two wide column">
                                        <i className="chess icon left floated"></i>
                                        <div className="">
                                            Create new
                                            <div className="">ROLE</div>
                                        </div>
                                </button> 
                            </div>
                        </div>
                        <div className="ui row">
                            <div className="ui column">
                                    <OrganizationList />
                            </div>
                            <div className="ui column">
                                    <UserList />
                            </div>
                        </div>
                    </div>
                )
            
        }
    };
}

const mapStateToProps = (state) => {
    return { orgs: state.organizations, selectedOrg: state.selectedOrg }
};

export default connect(mapStateToProps, { selectOrg, fetchAllContent })(OrganizationContent);