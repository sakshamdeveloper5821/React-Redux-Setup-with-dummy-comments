import { 
	getCommentsSuccess,
    getCommentsFailure
  } from '../actions/comments-action';

const initialState = {
	 comments:[],
	 fetched:false,
	 error:{}
}
export default function commentsReducer(state = initialState, {type,payload}) {
	switch(type){
	 case getCommentsSuccess :
		return {
			...state,
			fetched:true,
			comments:[...state.comments, payload]
		}
	 case getCommentsFailure :
		return {
			...state,
			fetched:false,
			error:payload
		}
	 default :
	    return state;
    }
}