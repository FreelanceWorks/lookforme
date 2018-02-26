import { takeEvery } from 'redux-saga/effects'

// Create Saga Watcher
export const sagaWatcher = sagas => Object
  .keys(sagas)
  .map(type => (function * () { yield takeEvery(type, sagas[type]) })())