import React from 'react';
import { connect } from 'react-redux';

import UserDetail from './UserDetail';

const MainContent = ({user}) => {

    if(!user){
        return(
            <div>
                <div className="content main-content">
                    Nothing selected
                </div>
            </div>          
        );
    }else if(user){
        return(
            <div>
                <div className="content main-content">
                    <UserDetail />
                </div>
            </div>          
        );
    }
    
    
};
const mapStateToProps = (state) => {
    return { user: state.selectedUser }
};

export default connect(mapStateToProps)(MainContent);
