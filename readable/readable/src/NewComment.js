import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addNewComment, handlePopUps, handleCommentPopUps, editCommentAction, retrieveComments } from './Actions/index'



class NewComment extends Component {
state = {
	body: "",
	author: ""
}

componentDidMount() {
	if (this.props.comment) {
	this.setState({
			body: this.props.comment.body,
			author: this.props.comment.author,
			
		})
	}
}

handleSubmit = (event) => {
	event.preventDefault();
	if (this.props.comment.id == undefined) {
	const id = (Math.floor(Math.random() * 1000000000));
	const timestamp = Date.now();
	const { body, author } = this.state;
	const parentId = (this.props.postID);
	console.log(author);
	this.props.addNewComment({
		parentId,
		id,
		timestamp,
		body,
		author,
	})
	this.setState({
		body: "",
		author: "",
	})}
	if (this.props.comment.id !== undefined) {
		const id = this.props.comment.id;
		const bodySubmit = {
		timestamp: Date.now(),
		body: this.state.body
		}
	this.props.editCommentAction(id, bodySubmit);
	}
	
	this.props.handleCommentPopUps(null, "commentPopUp");
	this.props.retrieveComments(this.props.postID);
}

	
render() {
	return (
<div className="popUp">
<div className="popup_inner">
<div className="newCommentWrapper">
<div className="commentTitle">NEW COMMENT</div>
<div className="commentForm">
<form>
    <label htmlFor="body" id="commentForm">comment</label>
<textarea rows="8" id="body" value={this.state.body} onChange={(event) => 
			this.setState({body: event.target.value})}></textarea>

    <label htmlFor="author">name</label>
<input type="text" id="author" value={this.state.author} placeholder="any name will do" onChange={(event) => 
			this.setState({author: event.target.value})}></input>

    <button className="submitButton" onClick={this.handleSubmit}>submit</button>
	   <button className="submitButton closeButton" onClick={() => this.props.handleCommentPopUps(null, "commentPopUp")}>close</button>
  </form>
</div>
</div>
</div>
</div>
)
}

}

const mapStateToProps = (state) => {
    return {
		post: state.post,
		comment: state.comment,
	  }
  }
  
  const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
	addNewComment: addNewComment,
	handlePopUps: handlePopUps,
	handleCommentPopUps: handleCommentPopUps,
	editCommentAction: editCommentAction,
	retrieveComments: retrieveComments,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);