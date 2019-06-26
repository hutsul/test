import * as types from './types';

export const defaultState = {
    isActive: false,
};

export default (state = defaultState, action) => {
    const {
        type
    } = action;

    switch (type) {
        case types.TOGGLE_NAV:
            return {
                ...state,
                isActive: !state.isActive
            };

        default:
            return state;
    }
};