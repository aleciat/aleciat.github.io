import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { sortBy, sortOrdering, fetchPosts} from './Actions/index'
import { bindActionCreators } from 'redux';

class Upper extends Component {

sortFunction = (event) => {
	console.log(event.target.value);
	this.props.sortOrdering(event.target.value);
}

render() {

	
 return(
<div><div className="appContainer">
        <header className="App-header">
        <div className="App-title">READABLE</div>
        </header>
		<div className="optionsContainer">
		<Link to="/"><button className="columnOptions" onClick={this.props.fetchPosts}>SHOW ALL</button></Link>
		<Link to="/react"><button className="columnOptions" onClick={() => this.props.sortBy('react')}>REACT</button></Link>
		<Link to="/redux"><button className="columnOptions" onClick={() => this.props.sortBy('redux')}>REDUX</button></Link>
		<Link to="/udacity"><button className="columnOptions" onClick={() => this.props.sortBy('udacity')}>UDACITY</button></Link>
		<Link to="/create"><button className="columnOptions newPost">NEW POST</button></Link>
		</div>
	
</div>
<div className="sortOptions"><select onChange={this.sortFunction}>
	<option value="sortby" >Sort by...</option>
	<option value="time-ascending">Time - Oldest First</option>
	<option value="time-descending">Time - Newest First</option>
	<option value="upvotes">Upvotes</option>
	<option value="downvotes">Downvotes</option>
	</select>
	</div>
</div>)

}

}

const mapStateToProps = (state) => {
	  return {

	  }
  }
  
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sortBy: sortBy,
	sortOrdering: sortOrdering,
	fetchPosts: fetchPosts,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Upper);