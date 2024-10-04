import { legacy_createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
});

const store = legacy_createStore(
  rootReducer,
  devToolsEnhancer()
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export default store;
