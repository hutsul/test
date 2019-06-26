import * as types from './types';

export const fetchItems = payload => ({
    type: types.FETCH_ITEMS,
    payload
});

export const searchItems = payload => ({
    type: types.FETCH_ITEM,
    payload
});

export const fetchItemsSucceeded = payload => ({
    type: types.FETCH_ITEMS_SUCCEEDED,
    payload
});

export const fetchItemsFailed = payload => ({
    type: types.FETCH_ITEMS_FAILED,
    payload
});
