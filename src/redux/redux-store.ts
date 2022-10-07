import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {friendsReducer} from "./friends-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    friendsReducer
});

export let store = createStore(reducers);

export type RootState = ReturnType<typeof reducers>