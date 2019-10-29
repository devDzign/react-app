import * as actionType from './actionTypes'


export const setAuthentication = (isLoggedIn) => {
    console.log("setAuthentication:", isLoggedIn);
    return (dispatch) => {
        dispatch(
            {
                type: actionType.SET_AUTHENTICATION,
                isLoggedIn: isLoggedIn
            }
        );
    }
}




export const  incrementActionCount = () => {
    return (dispatch) => {
        dispatch(
            {
                type: actionType.INCREMENT_ACTION8COUNT
            }
        )
    }
};






