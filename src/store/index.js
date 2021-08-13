import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { logger } from 'redux-logger'

import images from './reducers/images'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(images, applyMiddleware(logger, sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default store
