import get from 'lodash/get';

export const isFetching = state => get(state, 'home.isFetching');
export const getItems = state => get(state, 'home.items');
export const canLoad = state => get(state, 'home.canLoad');
export const getQueryParams = state => get(state, 'home.queryParams');
export const getSearchValue = state => get(state, 'home.searchValue');
export const canLoadMore = state => {
    const { total, offset } = get(state, 'home.queryParams');
    return total > offset;
};