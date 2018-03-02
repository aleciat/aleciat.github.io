import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchPosts } from './Actions/index'

class Thanks extends Component {
	
	componentDidMount() {
   this.props.fetchPosts();
  }
	
render() {
  return(
  <div className="thanksContainer">
  <Link to="/create"><button className="addAnotherPost thanksButton">Another Post?</button></Link>
  <Link to="/"><button className="goHome thanksButton">Back to Home</button></Link>

</div>
)
}
}

const mapStateToProps = (state) => {
	  return {
		  posts: state.posts,
		  categories: state.categories
	  }
  }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPosts: fetchPosts
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Thanks);