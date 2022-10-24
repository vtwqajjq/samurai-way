import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {friendsReducer} from "./friends-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    friendsReducer
});

export let store = createStore(rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>