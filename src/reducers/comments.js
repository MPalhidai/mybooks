import {
  initialState,
  CREATE_COMMENT
} from '../actions/constants';


export const commentReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        comments: [ action.comment, ...state.comments ]
       }
    default:
      return state
  }
}
