import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import PostMapping from './PostMapping'


class Categories extends Component {

render () {

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
		  posts: state.filteredPosts.filter(post => 
		  post.category === state.category
		  ),
		  filter: state.category,
		  filtered: state.filteredPosts
	  }
  }
  



export default connect(mapStateToProps)(Categories)