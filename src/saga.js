import { put, takeEvery } from 'redux-saga/effects'

import { sampleLoadDataSagaWatcher } from './models/sampleAppData'

function* rootSaga () {
  yield [
    ...sampleLoadDataSagaWatcher
  ]
}

export default rootSaga