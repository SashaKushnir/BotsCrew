import {ActionsTypes} from "../store";
import {commonA} from "./commonA";

interface CommonInitialType {
    isFetching: boolean
}


const commonInitial: CommonInitialType = {
    isFetching: false
}

export const commonR = (common: CommonInitialType = commonInitial, action: ActionsTypes<typeof commonA>) => {
    switch (action.type) {
        case "SET_FETCHING_TOGGLE":
            return {
                ...common,
                isFetching: action.status
            }
        default:
            return common
    }
}