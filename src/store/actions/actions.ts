import {ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE} from "../constants/actionTypes";

export type ActionsType = {
    type: string
    payload: string
}

export const setPersonToFavorite = (person: { [p: number]: { img: string; name: string } }) => ({type: ADD_PERSON_TO_FAVORITE, payload: person} as const)

export const removePersonFromFavorites = (personId:string) => ({type: REMOVE_PERSON_FROM_FAVORITE,  payload: personId} as const)



export type AppActionType =
    ReturnType<typeof setPersonToFavorite> |
    ReturnType<typeof removePersonFromFavorites>