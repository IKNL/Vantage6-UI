import React from 'react';
import { connect } from 'react-redux';

import { selectPage } from '../actions';
import SidebarButton from './SidebarButton';
class Sidebar extends React.Component {
    


    render(){
        return (
            <div className="Sidebar">
                {/* <SidebarButton 
                selectPage={selectPage} 
                pageIndex={0} 
                buttonName="HOME" 
                buttonIcon="home icon" 
                /> */}
                <SidebarButton 
                selectPage={selectPage} 
                pageIndex={6}
                buttonName="STUDIES" 
                buttonIcon="search plus icon" 
                />
                <SidebarButton 
                selectPage={selectPage} 
                pageIndex={2}
                buttonName="COMPUTATIONS" 
                buttonIcon="chart bar icon" 
                />
                <SidebarButton 
                selectPage={selectPage} 
                pageIndex={1}
                buttonName="MANAGE USERS" 
                buttonIcon="user icon" 
                />
                <SidebarButton 
                selectPage={selectPage} 
                pageIndex={9}
                buttonName="ORGANIZATIONS" 
                buttonIcon="building icon" 
                />

                
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { selectedPage: state.selectedPage }
}

export default connect(mapStateToProps, { selectPage })(Sidebar);