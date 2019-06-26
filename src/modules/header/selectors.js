import get from 'lodash/get';

export const isActive = state => get(state, 'header.isActive');
export const getPathName = state => {
    const path = state.router.location.pathname;
    return path.replace(/[^A-Za-z]/g, "")
}