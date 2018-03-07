import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { editPostAction, handlePopUps, fetchPosts } from './Actions/index'
import { bindActionCreators } from 'redux';



class EditPostPopup extends Component {
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
		title: this.props.singlePost.title,
		body: this.props.singlePost.body,
		author: this.props.singlePost.author,
		category: this.props.singlePost.category,
		id: this.props.singlePost.id,
	})
};	


handleSubmit = () => {
	const id = this.state.id;
	const bodySubmit = {
		title: this.state.title,
		body: this.state.body
	}
	this.props.editPostAction(id, bodySubmit);
    this.props.handlePopUps(null, "postPopUp");
	this.props.fetchPosts();
};
	
	
render() {
	return(
<div className="popUp">
<div className="popup_inner">
	<div className="editTitle"><strong>EDIT POST</strong></div>

  <form>
    <label htmlFor="title">title</label>
    <input type="text" id="title" value={this.state.title} onChange={(event) => 
			this.setState({title: event.target.value})}></input>

    <label htmlFor="post">body</label>
    <textarea rows="8" id="body" value={this.state.body} onChange={(event) => 
			this.setState({body: event.target.value})}></textarea>

    <label htmlFor="author">author</label>
    <input type="text" id="author" value={this.state.author} disabled></input>

    <label htmlFor="category">category</label>
    <select id="category" name="category" value={this.state.category} disabled>
      <option value="react">react</option>
      <option value="redux">redux</option>
      <option value="udacity">udacity</option>
    </select>
   </form>	
   <button className="submitButton" onClick={this.handleSubmit}>submit</button>
   <button className="submitButton closeButton" onClick={() => this.props.handlePopUps(null, "postPopUp")}>close me</button>
	
	
	
	
		
	
	
	
	
	
	
	</div>
</div>
	
	
	
	
	
	
	
	
	
	)
}

}
const mapStateToProps = (state) => {
	  return {
		singlePost: state.post,
	  }
  }
  

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    editPostAction: editPostAction,
	handlePopUps: handlePopUps,
	fetchPosts: fetchPosts,
  }, dispatch);
};




export default connect(mapStateToProps, mapDispatchToProps)(EditPostPopup);

