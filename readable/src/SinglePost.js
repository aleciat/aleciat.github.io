import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { returnVote, getPost, deletePost, setPost, retrieveComments, fetchPosts } from './Actions/index'
import { bindActionCreators } from 'redux';
import SinglePostCode from './SinglePostCode'
import My404Component from './My404Component'

class SinglePost extends Component {
   
componentWillMount() {
	this.props.fetchPosts();
	this.props.getPost(this.props.postID);
   }	   

   
   
render () {
	console.log("SINGLE POST")
const postID = this.props.postID

if (this.props.posts[postID]) {
	return <SinglePostCode post={this.props.posts[postID]} postID={postID}/>
}

else {
	return <My404Component />
}
}


	
}


const mapStateToProps = (state) => {
	  return {
		posts: state.posts,
		
		 }
  }
  
 const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    returnVote: returnVote,
	setPost: setPost,
	getPost: getPost,
	retrieveComments: retrieveComments,
	deletePost: deletePost,
	fetchPosts: fetchPosts,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);


