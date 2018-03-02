
const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  "Accept": "application/json",
  "Authorization": token,
  "Content-Type": "application/json"
};

//***GET FUNCTIONS***
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
	.then(data => data.categories)

export const getPostsByCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
  .then(res => res.json())
  
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
  .then(res => res.json())
  
export const getPostDetails = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
  .then(res=> res.json())
  
export const getComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
  .then(res=> res.json())
  .then(console.log("API COMMENTS GOTTEN"))

  
//***POST FUNCTIONS***
export const addNewPost = post =>
  fetch("http://localhost:3001/posts", {
	  method: 'POST',
	  headers,
	  body: JSON.stringify(post)
  }).then(res => res.json())
  .then(console.log('add new post fired'))
  
export const voteOnPost = (id, vote) =>
  fetch(`${api}/posts/${id}`, {
	  method: 'POST',
	  headers,
	  body: JSON.stringify({ option: vote })
  }).then(res => res.json())
  
  
export const addComment = comment =>
  fetch("http://localhost:3001/comments", {
	  method: 'POST',
	  headers,
	  body: JSON.stringify(comment)
  }).then(res => res.json())
    .then(console.log('add new comment fired'))


export const voteOnComment = (id, vote) =>
  fetch(`${api}/comments/${id}`, {
	  method: 'POST',
	  headers,
	  body: JSON.stringify({ option: vote })
  }).then(res => res.json())

  

//***PUT FUNCTIONS***
export const editComment = (id, comment) =>
  fetch(`${api}/comments/${id}`, {
	  method: 'PUT',
	  headers,
	  body: JSON.stringify( comment )
  }).then(res => res.json())
  .then(console.log("comment edit"))
  
export const editPost = (id, post) =>
  fetch(`${api}/posts/${id}`, {
	  method: 'PUT',
	  headers,
	  body: JSON.stringify( post ),
  }).then(res => res.json())
  .then(console.log("api edit"))


  
//***DELETE FUNCTIONS***
export const deleteComment = (id) =>
  fetch(`${api}/comments/${id}`, {
	  method: 'DELETE',
	  headers,
  }).then(res => res.json())
  
  export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, {
	  method: 'DELETE',
	  headers,
  }).then(res => res.json())
  .then(console.log("Api delete"))
  
  
