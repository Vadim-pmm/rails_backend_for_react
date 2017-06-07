import {combineReducers} from 'redux';
import ArticlesReducer from './articles_reducer'; 

const allReducers = combineReducers({
	articles: ArticlesReducer
});

export default allReducers
