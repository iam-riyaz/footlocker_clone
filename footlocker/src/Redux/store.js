
import {legacy_createStore, combineReducers, applyMiddleware, compose} from "redux"

import thunk from "redux-thunk "
import {reducer}  from "./Products/reducer"

 const rootReducer= combineReducers({footlockerData:reducer}  )

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store=legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)) )