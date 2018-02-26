import { createAction, createReducer } from 'redux-act'
import { put, call, takeEvery } from 'redux-saga/effects'
import { sagaWatcher } from '../utilities/sagaWatcher'
import getPeople from '../api'
/** --------------------------------------------------
 *
 * Actions
 *
 */

export const fetchData = createAction('FETCHING_DATA')
export const fetchDataSuccess = createAction('FETCHING_DATA_SUCCESS')
export const fetchDataFailure = createAction('FETCHING_DATA_FAILURE')

/** --------------------------------------------------
 *
 * Sagas
 *
 */
export const sagas = {
    [fetchData]: function * () {
        try {
            const data = yield call(getPeople)
            yield put(fetchDataSuccess(data))
          } catch (e) {
            yield put(fetchDataFailure())
          }
      }
}

export const sampleLoadDataSagaWatcher = sagaWatcher(sagas)

/** --------------------------------------------------
 *
 * Reducers
 *
 */
export const appData = {
    [fetchDataSuccess]: (state, data) => {
        return {
            ...state,
            isFetching: false,
            data
        }
    },
    [fetchDataFailure]: state => {
        return {
            ...state,
            isFetching: false,
            error: true
        }
    }
}

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
}

export default createReducer(appData, initialState)