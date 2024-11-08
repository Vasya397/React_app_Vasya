import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { thunk } from "redux-thunk";
import appReducer from "./app-reducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

const composedEnhancers = compose(applyMiddleware(thunk), devToolsEnhancer());

const store = legacy_createStore(rootReducer, composedEnhancers);

export default store;
