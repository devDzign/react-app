import * as actionType from '../store/actions/actionTypes'
import {incrementActionCount} from "../store/actions/actions";


export const actionCounter = function (store) {
    return function (next) {
        return function (action) {
            if (actionType.INCREMENT_ACTION8COUNT !== action.type) {
                store.dispatch(incrementActionCount())
            }
            next(action)
        }
    }
}