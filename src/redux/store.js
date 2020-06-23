import { createStore, combineReducers } from "redux";
import goodsReducer from './goods-reducer'
import privatReducer from './privat-reducer'

let reducers = combineReducers({
    goods: goodsReducer,
    privat: privatReducer
});

let store = createStore(reducers);
window.store = store;
export default store;