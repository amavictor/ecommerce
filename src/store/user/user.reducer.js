import {USER_ACTION_TYPES} from "./user.types";


const INITIAL_STATE = {
    currentUser: null,
};

//Because there's no useReducer hook you have to pass the state in the argument

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        default:
            return state
    }
};