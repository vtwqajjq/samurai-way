import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {friendsReducer} from "./friends-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {authReducer} from "./auth-reducer";

let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    friendsReducer,
    authReducer
});

export let store = createStore(rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>