import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { editCommentAction, handlePopUps  } from './Actions/index'
import { bindActionCreators } from 'redux';
import * as API from './Api'



class CommentPopUp extends Component {
constructor() {
  super();
    this.state = {
	title: "",
	body: "",
	author: "",
	category: "",
	id: "",
	};
	
	this.handleSubmit = this.handleSubmit.bind(this);
  }

componentDidMount() {
	this.setState({
		title: this.props.title,
		body: this.props.body,
		author: this.props.author,
		category: this.props.category,
		id: this.props.id,
	})
};	


handleSubmit = () => {
	const id = this.state.id;
	const bodySubmit = {
		title: this.state.title,
		body: this.state.body
	}
	this.props.editPostAction(id, bodySubmit);
    this.props.handlePopUps("postPopUp");
	this.props.fetchPosts();
};
	
	
render() {
	return (
<div className="popUp">
<div className="popup_inner">
<div className="newCommentWrapper">
<div className="commentTitle">New Comment</div>
<div className="commentForm">
<form>
    <label htmlFor="body" id="commentForm">Comment</label>
<textarea rows="8" id="body" value={this.state.body} onChange={(event) => 
			this.setState({body: event.target.value})}></textarea>

    <label htmlFor="author">Your Name</label>
<input type="text" id="author" value={this.state.author} placeholder="Who are you...?" onChange={(event) => 
			this.setState({author: event.target.value})}></input>

    <button className="submitButton" onClick={this.handleSubmit}>Submit</button>
	   <button className="submitButton closeButton" onClick={() => this.props.handlePopUps("commentPopUp")}>close me</button>
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
		 
	  }
  }
  

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    editCommentAction: editCommentAction
  }, dispatch);
};




export default connect(mapStateToProps, mapDispatchToProps)(CommentPopUp);

