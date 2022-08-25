import {omit} from 'lodash';
import {getLocalStorage} from "../localStorage/localStorage";
import {ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE} from "../constants/actionTypes";
import {AppActionType} from "../actions/actions";

type initialStateType = {
    key: string
    date: number
}

const initialState: initialStateType = getLocalStorage('store');


const favoriteReducer = (state:initialStateType = initialState, action: AppActionType) => {
    switch (action.type) {
        case ADD_PERSON_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_PERSON_FROM_FAVORITE: {
            return omit(state, [action.payload])
        }
        default:
            return state;
    }
};

export default favoriteReducer;

