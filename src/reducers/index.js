import { combineReducers } from 'redux';
import PlaceReducer from './reducer_place';

const rootReducer = combineReducers({
    placeData: PlaceReducer
});

export default rootReducer;
