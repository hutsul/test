import * as types from './types';

const queryParams = {
    offset: 0,
    limit: 10,
    total: 20
};

export const defaultState = {
    isFetching: true,
    items: [],
    searchValue: '',
    queryParams: { ...queryParams }
};

export default (state = defaultState, action) => {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case types.FETCH_ITEMS:
            return {
                ...state,
                isFetching: true
            };

        case types.FETCH_ITEM:
            return {
                ...state,
                isFetching: true,
                items: [],
                searchValue: payload,
                queryParams: queryParams
            };

        case types.FETCH_ITEMS_SUCCEEDED:
            const offset = state.queryParams.offset + payload.length;
            return {
                ...state,
                isFetching: false,
                items: [...state.items, ...payload],
                queryParams: {
                    ...state.queryParams,
                    offset
                }
            };

        case types.FETCH_ITEMS_FAILED:
            return {
                ...state,
                isFetching: false,
                items: []
            };

        default:
            return state;
    }
};