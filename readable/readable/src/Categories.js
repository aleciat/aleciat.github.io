import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import PostMapping from './PostMapping'
import { fetchPosts, sortBy } from './Actions/index'
import { bindActionCreators } from 'redux';


class Categories extends Component {

componentWillMount() {
	this.props.fetchPosts();
	this.props.sortBy(this.props.category);
}

render () {
console.log(this.props.posts);
	return(
	<div>
	<div className='postsWrapper'>
	<ul>
	{this.props.posts.map(post => (
		<PostMapping post={post} key={post.id} />
	))}
	</ul>
	</div>
	</div>
	)
}





}

const mapStateToProps = (state) => {
	  return {
		  posts: Object.keys(state.posts).map(key => state.posts[key]).filter(post => 
		  post.category === state.category
		  ),
	  }
  }
  
 const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
	fetchPosts: fetchPosts,
	sortBy: sortBy,
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Categories)