'use strict';

import {combineReducers} from 'redux';
import rank from './rankReduce';
import home from './homeReduce';

const rootReducer = combineReducers({
	home,
	rank
})

export default rootReducer;