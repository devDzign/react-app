import * as actionTypes from '../actions/actionTypes';

const initialState = {
    actionCount: 0
};

const actionInfoReducer = (state = initialState, action) => {
    if (action.type === actionTypes.INCREMENT_ACTION8COUNT) {
        return {
            ...state,
            actionCount: state.actionCount + 1
        }
    } else {
        return state;
    }
};

export default actionInfoReducer;