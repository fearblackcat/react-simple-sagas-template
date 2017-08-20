/**
 * Created by russell on 8/9/2017.
 */
/**
 * Created by russell on 7/29/2017.
 */
import * as sagas from './auth.js'
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
    const watchers = Object.values(sagas).map(fork)
    yield watchers
}