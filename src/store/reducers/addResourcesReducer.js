import * as actionTypes from '../actions/actionTypes';

const initialState = {
    resourceList: [0]
};

const addResourcesReducer = (state = initialState, action) => {
    if (action.type === actionTypes.ADD_RESOURCES) {
        return {
            resourceList: [
                ...state.resourceList,
                state.resourceList[state.resourceList.length-1]+1
            ]
        }
    } else {
        return state;
    }
};

export default addResourcesReducer;