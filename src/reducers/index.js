import { combineReducers } from 'redux';
import PostReducer from './reducer-posts';

const rootReducer = combineReducers({
  post: PostReducer
});

export default rootReducer;
