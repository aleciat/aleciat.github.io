import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { returnVote, setPost, deletePost, handlePopUps } from './Actions/index'
import { Link } from 'react-router-dom'
import EditPostPopup from './EditPostPopup'



class PostMapping extends Component {

render() {
const post = this.props.post;

var timestamp1 = new Date(post.timestamp);
var timestamp2 = timestamp1.toLocaleDateString();
var timestamp3 = timestamp1.toLocaleTimeString();

  return(
  <div className="bigElement">
  		<div className="triangleContainer">
		<div className="triangle-up" onClick={() => this.props.returnVote(post.id, 'upVote')}><p>{post.voteScore}</p></div><div className="triangle-down" onClick={() => this.props.returnVote(post.id, 'downVote')}></div>
		</div>
    <li key={post.id}>
		<div className="mainPosts" key={post.id} id={post.id}>
<Link to={"/" + post.category + "/" + post.id}><div className="postTitle">{post.title}</div></Link>
<button className="deletePosts" onClick={() => this.props.deletePost(post.id)}><i className="far fa-trash-alt"></i></button>
<button className="editPost" onClick={() => this.props.handlePopUps(post.id, "postPopUp")}><i className="far fa-edit"></i></button>
		<div className="postAuthor">Posted by {post.author} on {timestamp2} at {timestamp3}</div>
		<div className="categoryAndComments"><div className="postCat">{post.commentCount} comments</div><div className="postCat">{post.category}</div></div>

	</div> 
	
	</li>
	
		 {this.props.postPopUp ? 
          <EditPostPopup
            title={post.title}
			body={post.body}
			author={post.author}
			category={post.category}
			id={post.id}
          />
          : null
        }

	</div>
	 
	
)
}
}


const mapStateToProps = (state) => {
	  return {
		  posts: state.posts,
		  filteredPosts: state.filteredPosts,
		  postPopUp: state.postPopUp,
		 }
  }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    returnVote: returnVote,
	setPost: setPost,
	deletePost: deletePost,
	handlePopUps: handlePopUps,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostMapping);