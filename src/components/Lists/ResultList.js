import React from 'react';
import { connect } from 'react-redux';
import { fetchAllContent, selectResult } from '../../actions';

class ResultList extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            searchValue: '',
            maxAge: 99999,
            searchCollab: props.collabFilter !== undefined ? props.collabFilter : ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCollabChange = this.handleCollabChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllContent();
    }

    formatTimestamp(timestamp){
        var time = new Date(timestamp);
        return time.toLocaleString('NL');
    }

    truncateLine(taskName){
        if(taskName.length > 40){
            return taskName.substring(0,40) + '...';
        }else{
            return taskName;
        }
    }

    createResultList(results){
        return results.slice(0, this.props.listLength).map((result) => {
            return (
                <div className="item" key={result.id}
                onClick={() => this.props.selectResult(result.id)}>
                    <div className="content">
                        <div className="ui button basic secondary right floated">
                            COLLAB NAME 
                        </div>
                        <div className="ui sub header user-name">
                            {this.truncateLine(result.input)} 
                        </div>
                        <div className="ui sub header user-role">
                            {this.formatTimestamp(result.assigned_at)}
                        </div>
                    </div>
                </div>            
            );
        })
    }

    filterResults(allResults){
        var filteredSet = allResults.filter(x => x.input.indexOf(this.state.searchValue) > -1);
        filteredSet = filteredSet.filter(x => x.input.indexOf(this.state.searchCollab) > -1);
        filteredSet = filteredSet.filter(x => Date.now() - Date.parse(x.assigned_at) < this.state.maxAge * 86400000);
        return this.createResultList(filteredSet);
    }

    handleChange(event){
        this.setState({searchValue: event.target.value})
    }

    handleCollabChange(event){
        this.setState({searchCollab: event.target.value})
    }

    handleAgeChange(event){
        if(event.target.value === ""){
            this.setState({maxAge: 99999})
        }else{
            this.setState({maxAge: event.target.value})
        }
        
    }

    renderList(){
        
        return (
            <div>
                <div>
                    <h4 className="ui subheader">FILTER RESULTS</h4>
                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="prompt" type="text" placeholder="Input contains" onChange={this.handleChange} />
                            <i className="search icon"></i>
                        </div>
                        <div className="ui icon input">
                            <input className="prompt" type="text" placeholder="Collaboration name" onChange={this.handleCollabChange} />
                            <i className="handshake icon"></i>
                        </div>
                        <div className="ui icon input">
                            <input className="prompt" type="number" placeholder="Up to [x] days ago" onChange={this.handleAgeChange} />
                            <i className="calendar icon"></i>
                        </div>
                        <div className="results"></div>
                    </div>
                </div>
                <div className="ui relaxed divided list">
                {this.filterResults(this.props.results)}
                </div>
            </div>
        )
    }

    render(){
        return this.renderList();
    }
}

const mapStateToProps = (state) => {
    return { results: state.results };
}

export default connect(mapStateToProps, { fetchAllContent, selectResult })(ResultList);
