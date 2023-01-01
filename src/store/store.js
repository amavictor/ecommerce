import {compose, createStore, applyMiddleware} from "redux"
import logger from "redux-logger"
import {rootReducer} from "./root-reducer";
import {persistStore, persistReducer} from "redux-persist"
import localStorage from "redux-persist/es/storage";
import thunk from "redux-thunk"


//using redux persist to store in local storage
const persistConfig = {
    key: 'root', //root means persist the whole thing
    storage: localStorage,
    whiteList: ['cart'],
    blacklist: ['user']//The blacklist is to determine reducers you dont want to persist. They shoould be the same spelling as in rootreducer object

}


const persisTedReducer = persistReducer(persistConfig, rootReducer)


const middleWares = [process.env.NODE_ENV === "development" && logger, thunk].filter(Boolean)//,filter removes any falsiness from the array

const composeEnhancer = (
    process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))
export const store = createStore(persisTedReducer, undefined, composedEnhancers)
export const persistor = persistStore(store)
