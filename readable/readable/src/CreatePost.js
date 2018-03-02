import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addPost, fetchPosts } from './Actions/index'

class CreatePost extends Component {
  state = {
	title: "",
	body: "",
	author: "",
	category: "react",
	fireRedirect: false,
	};
	
	  

handleSubmit = (event) => {
	event.preventDefault();
	const id = Math.floor(Math.random() * 1000000000);
	const timestamp = Date.now();
	const { title, body, author, category } = this.state;
    this.props.addPost({
		id,
		timestamp,
		title,
		body,
		author,
		category
	});
	this.props.fetchPosts();
    this.setState({ fireRedirect: true })
}

handleClose = () => {
	this.setState({ fireRedirect: true})
}

	  
	  
render() {
	 const { fireRedirect } = this.state
	
return (
<div className="popUp">
<div className="popup_inner">
  <div className="createWrapper">
  <div className="createTitle">ADD NEW POST</div>
  <div className="container">
  <form>
    <label htmlFor="title">title</label>
    <input type="text" id="title" onChange={(event) => 
			this.setState({title: event.target.value})}></input>

    <label htmlFor="post">body</label>
    <textarea rows="8" id="body" onChange={(event) => 
			this.setState({body: event.target.value})}></textarea>

    <label htmlFor="author">name</label>
    <input type="text" id="author" placeholder="any name will do" onChange={(event) => 
			this.setState({author: event.target.value})}></input>

    <label htmlFor="category">category</label>
    <select id="category" name="category" onChange={(event) => 
			this.setState({category: event.target.value})}>
      <option value="react">react</option>
      <option value="redux">redux</option>
      <option value="udacity">udacity</option>
    </select>

    <button className="submitButton" onClick={this.handleSubmit}>submit</button>
	<button className="submitButton closeButton" onClick={this.handleClose}>close</button>
  </form>
  {fireRedirect && (
          <Redirect to={'/'}/>
        )}
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
    addPost: addPost,
	fetchPosts: fetchPosts,
  }, dispatch);
};




export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
