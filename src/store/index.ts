import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import reduxThunk from "redux-thunk"
import rootReducer from "./root-reducers"
import { composeWithDevTools } from "redux-devtools-extension"

const middlewares: any = [reduxThunk]

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger)
}

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
