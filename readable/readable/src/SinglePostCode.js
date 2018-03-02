import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { returnVote, deletePost, retrieveComments, fetchPosts, handlePopUps } from './Actions/index'
import { bindActionCreators } from 'redux';
import Comments from './Comments'
import Popup from './Popup'
import { Redirect } from 'react-router'


class SinglePostCode extends Component {
state = {
	fireRedirect: false,
}


componentWillMount() {
this.props.retrieveComments(this.props.postID);
}

handleDelete = (postID) => {
	this.props.deletePost(postID)
	this.setState({ fireRedirect: true })
}
		

render() {
const post = this.props.post;	
const timestamp1 = new Date(post.timestamp);
const timestamp2 = timestamp1.toLocaleDateString();
const timestamp3 = timestamp1.toLocaleTimeString();


		return (      		

<div className='singlePostsWrapper'>
<div className="bigElement">
<div className="triangleContainer">
		<div className="triangle-up" onClick={() => this.props.returnVote(post.id, 'upVote')}><p>{post.voteScore}</p></div><div className="triangle-down" onClick={() => this.props.returnVote(post.id, 'downVote')}></div>
		</div>
<div className="mainPosts">
<div className="singlePostTitle">{post.title}</div>
<button className="deletePosts" onClick={() => this.handleDelete(post.id)}><i className="far fa-trash-alt"></i></button>
<button className="editPost" onClick={() => this.props.handlePopUps(this.props.postID, "postPopUp")}><i className="far fa-edit"></i></button>
<div className="individualBody">{post.body}</div>
	<div className="postAuthor">Posted by {post.author} on {timestamp2} at {timestamp3}</div>
	<div className="postCat">{post.commentCount} comments</div>
	
</div></div>
<Comments postID={this.props.postID}/>


 {this.props.postPopUp ? 
          <Popup
            title={post.title}
			body={post.body}
			author={post.author}
			category={post.category}
			id={post.id}
          />
          : null
        }
		
{this.state.fireRedirect && (
          <Redirect to={'/'}/>
        )}


</div>

)
}
}

const mapStateToProps = (state) => {
	  return {
		posts: Object.keys(state.posts).map(key => state.posts[key]),
		postPopUp: state.postPopUp,
		 }
  }
  
 const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    returnVote: returnVote,
	retrieveComments: retrieveComments,
	deletePost: deletePost,
	fetchPosts: fetchPosts,
	handlePopUps: handlePopUps,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostCode);
