import { createStore, applyMiddleware, combineReducers } from 'redux'
import rootReducer from './reducer'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()


const store = createStore(rootReducer, undefined, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
  
export default store
