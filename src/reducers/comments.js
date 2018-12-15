import {
  initialState,
  CREATE_COMMENT,
  SET_COMMENTS
} from '../actions/constants';


export const commentReducer = ( state = initialState.comments, action ) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return [ action.comment, ...state ]
    case SET_COMMENTS:
      return action.comments
    default:
      return state
  }
}
