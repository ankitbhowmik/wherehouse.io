import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import launchReducer from './launch/launch.reducer';

const rootReducer = combineReducers({
    launch : launchReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;