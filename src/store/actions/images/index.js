import * as t from '../../actionTypes/images'

export function imageRequest() {
  return {
    type: t.IMAGE_REQUEST
  }
}

export function imageSuccess(data) {
  return {
    type: t.IMAGE_SUCCESS,
    payload: data
  }
}

export function imageFailure(errorMessage) {
  return {
    type: t.IMAGE_FAILURE,
    payload: errorMessage
  }
}

export function imageStartRequest() {
  return {
    type: t.IMAGE_START
  }
}

export function imageDelete(imageId) {
  return {
    type: t.IMAGE_DELETE,
    payload: imageId
  }
}

export function changePage(page) {
  return {
    type: t.CHANGE_PAGE,
    payload: page
  }
}
