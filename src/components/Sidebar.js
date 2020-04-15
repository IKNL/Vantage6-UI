import React from 'react';

import UserList from './UserList';
import NodeList from './NodeList';

class Sidebar extends React.Component {
    
    render(){
        return (
            <div className="Sidebar">
                <UserList />
                <div className="ui divider"></div>
                <NodeList />
            </div>
        );
    }

}

export default Sidebar;