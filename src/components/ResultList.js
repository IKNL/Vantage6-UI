import React from 'react';
import { connect } from 'react-redux';
import { fetchAllContent} from '../actions';

class ResultList extends React.Component {

    componentDidMount(){
        this.props.fetchAllContent();
    }

    renderList(){
        
        return this.props.results.slice(0, 3).map((result, props) => {
                return (
                    <div className="item" key={result.id}>
                        <div className="content">
                            <div className="ui sub header user-name">
                                {result.input} 
                            </div>
                            <div className="ui sub header user-role">
                                {result.assigned_at}
                            </div>
                        </div>
                    </div>            
                );
        });
    }

    render(){
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { results: state.results };
}

export default connect(mapStateToProps, { fetchAllContent })(ResultList);
