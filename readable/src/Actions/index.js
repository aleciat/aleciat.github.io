import * as API from '../Api'
import * as Constant from '../Constants'


export function retrieveComments (postID) {
	return function (dispatch) {
	API
	.getComments(postID)
	.then(comments => dispatch(receiveComments(comments)))

	}
}

export function receiveComments(comments) {
	return {
	type: Constant.GET_COMMENTS,
	comments
	}
};


export function receivePosts(posts) {
	return {
	type: Constant.RECEIVE_POSTS,
	posts
	}
};

export function fetchPosts() {
	return function (dispatch) {
  API
    .getPosts()
    .then(posts => dispatch(receivePosts(posts)))
	}
};

export function votePost(postID, vote) {
	return {
		type: Constant.VOTE_POST,
		postID,
		vote,
	}
}


export const returnVote = (postID, vote) => {
	return (dispatch) => {
	API.voteOnPost(postID, vote).then(post => {
	dispatch(votePost(postID, vote))})
	}
}

export const addPost = (post) => {
	return (dispatch) => {
		API.addNewPost(post).then(post => {
		dispatch({	
		type: Constant.ADD_POST,
		post,
		})})
	}
}

export function deletePost(postID) {
	console.log(postID)
	return(dispatch) => {
		API.deletePost(postID).then(post => {
			dispatch({
		type: Constant.DELETE_POST,
		postID,
		})})
		.then(console.log("post deleted"))
	}
}

export function deleteCommentAction(commentID) {
	return(dispatch) => {
		API.deleteComment(commentID).then(comment => {
			dispatch({
		type: Constant.DELETE_COMMENT,
		commentID,
		})})
		.then(console.log("comment deleted"))
	}
}


export const editPostAction = (id, post) => {

	return function(dispatch) {
	API.editPost(id, post)
	.then(dispatch(resp => postEdit(resp)))
}
}

export const postEdit = (post) => {
	return {
		type: Constant.EDIT_POST,
		post,
	}
}

export const editCommentAction = (commentID, comment) => {
	return function (dispatch) {
		API.editComment(commentID, comment)
		.then(dispatch(resp => commentEdit(resp)))
	}
}



export function commentEdit(comment) {
	return {
		type: Constant.EDIT_COMMENT,
		comment,
	}
}



export const addNewComment = (comment) => {
	return function(dispatch) {	
	API
	.addComment(comment)
	.then(c => dispatch(commentAdded(c)))
	.then(data => console.log(JSON.stringify(data)))
		}}
	
	
export const commentAdded = (comment) => {
	return {
	type: Constant.ADD_COMMENT,
		comment,
	}
}
	

export function voteComment(commentID, vote) {
	return {
		type: Constant.VOTE_COMMENT,
		commentID,
		vote,
	}
}


export const returnCommentVote = (commentID, vote) => {
	return (dispatch) => {
	API.voteOnComment(commentID, vote).then(post => {
	dispatch(voteComment(commentID, vote))})
	}
}



export function sortBy(sortParameter) {
	console.log("SORTBY")
	return {
		type: Constant.SORT_BY,
		sortParameter
	}
}

export function setPost(post) {
	return {
		type: Constant.SET_POST,
		post
	}
}

export function getPost(postID) {
	return function (dispatch) {
		API.getPostDetails(postID)
		.then(post => dispatch(setPost(post)))
	}
}

export function sortOrdering(sortParameter) {
	return {
		type: Constant.SORT_ORDER,
		sortParameter
	}
}

export function handlePopUps(postID, popupType) {
	return {
		type: Constant.HANDLE_POPUPS,
		postID,
		popupType,
		}
}

export function handleCommentPopUps(commentID, popupType) {
	return {
		type: Constant.HANDLE_COMMENT_POPUPS,
		commentID,
		popupType,
		}
}


