import * as Constant from '../Constants'



export default function commentsReducer (state, action) {
	switch (action.type) {
		case Constant.GET_COMMENTS:
		console.log("comments reducer")
		return {
          ...state,
		  comments: action.comments
		    
        };
	
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
		
		case Constant.ADD_COMMENT:
		return {
			...state,
			comments: {
				...state.comments,
				[action.comments.commentID] : action.comments
			}
		}
		

		

		
		default: 
		return {
			...state
			
		}
			
		}
		
}

