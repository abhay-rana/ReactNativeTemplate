import { USER_SET_LOGIN } from '~/actions/types';

export const INITIAL_STATE = {
    is_login: null,
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
    let newState = Object.assign({}, state);
    if (action.type === USER_SET_LOGIN) {
        newState.is_login = true;
        return newState;
    }
    return state;
};
