import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { MailReducer } from "./mailRedux/mailReducer";

const rootReducer = combineReducers({
  mailData: MailReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
