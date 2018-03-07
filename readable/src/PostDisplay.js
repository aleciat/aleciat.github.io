import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import PostMapping from './PostMapping'


class PostDisplay extends Component {


	render() {

		return (
	<div className='postsWrapper'>
	<ul>
	{this.props.posts.map(post => (
		<PostMapping post={post} key={post.id} />
	))}
	</ul>
	</div>
	
	)
  }
}

const mapStateToProps = (state) => {
	  return {
		  posts: Object.keys(state.posts).map(key => state.posts[key]),
	  }
  }

export default connect(mapStateToProps)(PostDisplay);