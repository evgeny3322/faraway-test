import {applyMiddleware, combineReducers, createStore} from "redux";
import favoriteReducer from "./reducers/favoriteReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppActionType} from "./actions/actions";


const rootReducer = combineReducers({
    favoriteReducer: favoriteReducer
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//redux-devtools
// export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppRootActionsType =
    | AppActionType

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionsType>

export type DispatchActionType = ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>

export const useAppDispatch = () => useDispatch<DispatchActionType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export default store

//@ts-ignore
window.store = store
