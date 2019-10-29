import {createSelector} from "reselect"
import lodash from "lodash"


export const getIntegerList = state => {
    return state.rootAddResourcesReducer.resourceList
}

export const getResourceContainNumberOneList = state => {
    return getIntegerList(state).filter(r => r.toString().indexOf('1') > -1)
}
export const getResourceNumberPrimaryList = state => {
    return getIntegerList(state).filter(r => isPrimedNumber(r))
}

export const getResourceNumberPrimaryContainNumberOneList = createSelector(
    getResourceContainNumberOneList,
    getResourceNumberPrimaryList,
    (containsOneList, primaryList) => {
        return lodash.intersection(containsOneList, primaryList)
    }
)

const isPrimedNumber = (resource) => {
    for (var i = 2; i < resource; i++) {
        if (resource % i === 0) {
            return false
        }
    }

    return resource > 1
}

