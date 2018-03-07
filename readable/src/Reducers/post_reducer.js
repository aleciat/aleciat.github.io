import * as Constant from '../Constants'

const initialState = {
	filteredPosts: [],
	posts: {},
	post: [],
	sort: 'time',
	category: 'all',
	comments: {},
	comment: [],
	postPopUp: false,
	commentPopUp: false,
}

export default function postReducer (state=initialState, action) {
	switch (action.type) {
		case Constant.RECEIVE_POSTS:
			const postsArray = action.posts;
			const orgPosts = postsArray.reduce(
				(accumulator, obj) => {
				accumulator[obj.id] = obj;
				return accumulator;
          }, {}
        );

        return {
          ...state,
		  posts : orgPosts,
		  filteredPosts : postsArray,
        };
	
		case Constant.VOTE_POST:
		if (action.vote == "upVote") {
		return {
        ...state,
        posts : {
            ...state.posts,
            [action.postID] : {
                ...state.posts[action.postID],
                voteScore: state.posts[action.postID].voteScore + 1
				}
        }
    }
		}
		if (action.vote == "downVote") {
				return {
        ...state,
        posts : {
            ...state.posts,
            [action.postID] : {
                ...state.posts[action.postID],
                voteScore: state.posts[action.postID].voteScore - 1
				}
        }
    }
		}
		
		case Constant.ADD_POST:
		return {
			...state,
			posts: {
				...state.posts,
				[action.post.id] : action.post
			}
		}
		
		case Constant.SORT_BY:
				return {
			...state,
			category: action.sortParameter
		}
		
		case Constant.SET_POST:
		return {
			...state,
			post: action.post
		}
		

		
		case Constant.GET_COMMENTS:
		const commentsArray = action.comments;
		const orgComments = commentsArray.reduce(
				(accumulator, obj) => {
				accumulator[obj.id] = obj;
				return accumulator;
          }, {}
        );
		return {
          ...state,
		  comments: orgComments
		    
        };

		case Constant.ADD_COMMENT:
		console.log(action.comment)
		return {
			...state,
			comments: {
				...state.comments,
				[action.comment.id] : action.comment
			}
		}
		
		case Constant.DELETE_POST:
		let allPosts = state.posts;
		if (allPosts.hasOwnProperty(action.postID)) {
			delete allPosts[action.postID];
			}
		return {
			...state,
			posts: allPosts
		}
		
		case Constant.SORT_ORDER:
		let sortPosts = state.filteredPosts;
		if (action.sortParameter == 'time-ascending') {
			sortPosts.sort(function(a,b){  
				let dateA = new Date(a.timestamp);
				let dateB = new Date(b.timestamp);
				return dateA > dateB ? 1 : -1;  
}
			)
		}
		if (action.sortParameter == 'time-descending') {
			sortPosts.sort(function(a,b){
				let dateA = new Date(a.timestamp);
				let dateB = new Date(b.timestamp);
				return dateA < dateB ? 1 : -1;  
			}
			)
		}
		if (action.sortParameter == 'upvotes') {
			sortPosts.sort(function(a,b){
				let voteA = a.voteScore;
				let voteB = b.voteScore;
				return voteA < voteB ? 1 : -1;  
			}
			)
		}
		if (action.sortParameter == 'downvotes') {
			sortPosts.sort(function(a,b){
				let voteA = a.voteScore;
				let voteB = b.voteScore;
				return voteA > voteB ? 1 : -1;  
			}
			)
		}
		return {
			...state,
			posts: sortPosts
		}
		
				case Constant.VOTE_COMMENT:
		if (action.vote == "upVote") {
		return {
        ...state,
        comments : {
            ...state.comments,
            [action.commentID] : {
                ...state.comments[action.commentID],
                voteScore: state.comments[action.commentID].voteScore + 1
				}
        }
    }
		}
		if (action.vote == "downVote") {
				return {
        ...state,
        comments : {
            ...state.comments,
            [action.commentID] : {
                ...state.comments[action.commentID],
                voteScore: state.comments[action.commentID].voteScore - 1
				}
        }
    }
		}
		
		
		case Constant.EDIT_POST: {
			console.log(action.post)
			return {
				...state,
				posts : {
					...state.posts,
					[action.post.id]: action.post
					}
				}
			}
			
			case Constant.EDIT_COMMENT: {
			console.log(action.comment)
			return {
				...state,
				comments : {
					...state.comments,
					[action.comments.id]: action.comments
					}
				}
			}
		
		
		case Constant.DELETE_COMMENT:
		let allComments = state.comments;
		if (allComments.hasOwnProperty(action.commentID)) {
			delete allComments[action.commentID];
			}
		return {
			...state,
			comments: allComments
		}
		
		case Constant.HANDLE_POPUPS:
		console.log("post popups")
		return {
			...state,
			[action.popupType]: !state[action.popupType],
			post: state.posts[action.postID]
		}
		
		case Constant.HANDLE_COMMENT_POPUPS:
		console.log("comment popups")
		return {
			...state,
			[action.popupType]: !state[action.popupType],
			comment: state.comments[action.commentID]
		}
		
		
		
		default: 
		return {
			...state
			
		}
			
		}
		
}

