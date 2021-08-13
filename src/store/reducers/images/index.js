import initialState from './initialState'
import * as t from '../../actionTypes/images'

function images(state = initialState, action) {
  switch (action.type) {
    case t.IMAGE_REQUEST:
      return { ...state, isLoading: true, errorMessage: null, firstLoad: true }
    case t.IMAGE_SUCCESS:
      const isDuplicate = state.data.some((image) => image.id === action.payload.id)
      return {
        ...state,
        isLoading: false,
        data: isDuplicate ? state.data : [...state.data, action.payload]
      }
    case t.IMAGE_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }
    case t.IMAGE_DELETE:
      return {
        ...state,
        data: state.data.filter((rec) => rec.id !== action.payload)
      }
    case t.CHANGE_PAGE:
      return { ...state, page: action.payload }
    default:
      return state
  }
}

export default images
