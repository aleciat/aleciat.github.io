import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { deleteCommentAction, returnCommentVote, handlePopUps, handleCommentPopUps } from './Actions/index'
import { bindActionCreators } from 'redux';
import NewComment from './NewComment'


class Comments extends Component {
	
	render () {
		return (
		<div>
		<div className="commentWrapper">
		<div>
		<div className="commentTitle"><strong>COMMENTS</strong>
		<button className="addNewComment" onClick={() => this.props.handlePopUps(null, "commentPopUp")}><i className="fas fa-plus"></i>add</button></div>	
		
		{this.props.comments.map(comment => (
		<div className="bigElement"  key={comment.id}>
		<div className="commentTriangleContainer">
		<div className="commentTriangle-up" onClick={() => this.props.returnCommentVote(comment.id, 'upVote')}><p>{comment.voteScore}</p></div><div className="commentTriangle-down" onClick={() => this.props.returnCommentVote(comment.id, 'downVote')}></div>
		</div>
		<div className="mainCommentBody">
		<div className="individualComment">
		<div className="commentAuthor"><strong>{comment.author}</strong></div>
		<button className="deleteComment" onClick={() => this.props.deleteCommentAction(comment.id)}><i className="far fa-trash-alt"></i></button>
		<button className="editComment" onClick={() => this.props.handleCommentPopUps(comment.id, "commentPopUp")}><i className="far fa-edit"></i></button>
		<div className="commentBody">{comment.body}</div>
		
		</div>
		</div>
		</div>
	))}
		
		</div></div>
		
		{this.props.commentPopUp ? 
          <NewComment
           postID = {this.props.postID}
			/>
          : null
        }
		
		
		</div>
		
		
		
		)
	}
}
	
	
	
const mapStateToProps = (state) => {
    return {
		comments: Object.keys(state.comments).map(key => state.comments[key]),
		commentPopUp: state.commentPopUp,
	  }
  }
  

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
	deleteCommentAction: deleteCommentAction,
	returnCommentVote: returnCommentVote,
	handlePopUps: handlePopUps,
	handleCommentPopUps: handleCommentPopUps,
  }, dispatch);
};

	
export default connect(mapStateToProps, mapDispatchToProps)(Comments);