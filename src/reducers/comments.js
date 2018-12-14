import {
  initialState,
  CREATE_COMMENT,
  SET_COMMENTS
} from '../actions/constants';


export const commentReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        comments: [ action.comment, ...state.comments ]
       }
    case SET_COMMENTS:
      return {
        comments: action.comments
      }
    default:
      return state
  }
}
