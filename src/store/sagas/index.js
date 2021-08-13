import { put, call, fork, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions/images'
import { api } from '../../services'
import * as t from '../actionTypes/images'

function* loadImage() {
  try {
    yield put(actions.imageRequest())
    const response = yield call(api.getImage)
    if (response.status === 'success') yield put(actions.imageSuccess(response.data))
    else yield put(actions.imageFailure(response.message))
  } catch (error) {
    yield put(actions.imageFailure(error.message))
  }
}

export function* watchLoadImage() {
  yield takeEvery(t.IMAGE_START, loadImage)
}

export default function* root() {
  yield fork(watchLoadImage)
}
