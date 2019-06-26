import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
import * as api from './api';
import * as selectors from './selectors';

export function* fetchItems() {
    try {
        const { offset, limit } = yield select(selectors.getQueryParams);
        const data = yield call(api.fetchItems, {startLimit: offset, endLimit: limit + offset});
        yield put(actions.fetchItemsSucceeded(data));
    } catch (ex) {
        yield put(actions.fetchItemsFailed(ex));
        console.log('error', ex);
    }
}

export function* searchItems({payload}) {
    try {
        const { offset, limit } = yield select(selectors.getQueryParams);
        const data = yield call(api.searchItems, {startLimit: offset, endLimit: limit + offset, searchValue: payload});
        yield put(actions.fetchItemsSucceeded(data));
    } catch (ex) {
        yield put(actions.fetchItemsFailed(ex));
        console.log('error', ex);
    }
}

export default [
    takeLatest(types.FETCH_ITEMS, fetchItems),
    takeLatest(types.FETCH_ITEM, searchItems),
];
