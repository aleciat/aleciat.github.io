import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import CreatePost from './CreatePost'
import PostDisplay from './PostDisplay'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchPosts } from './Actions/index'
import { withRouter } from 'react-router-dom'
import Categories from './Categories'
import Upper from './Upper'
import SinglePost from './SinglePost'



class App extends Component {
	
 
componentWillMount() {
   this.props.fetchPosts();
  }
	
  
render() {
    return (
	<div className="app">	
    <Route exact path="/create" render={() => ( <CreatePost /> )}/>
	 
	<Route exact path="/:category" render={(props) => (
	<div>
		<Upper />
        <Categories category={props.match.params.category} />
	</div>
          )}/>
		  
	<Route exact path="/:category/:postID" render={(props) => (
	<div>
		<Upper />
		<SinglePost postID={props.match.params.postID}/>
	</div>
	)} />
	 
    <Route exact path="/" render={() => (
	<div>
       <Upper />	
	   <PostDisplay />
	</div>
	)}/>
	

</div>
)}}

const mapStateToProps = (state) => {
	  return {
		
	  }
  }
  

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPosts: fetchPosts,
  }, dispatch);
};

	
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
