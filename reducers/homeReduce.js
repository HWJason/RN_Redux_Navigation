'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
    title:'我是首页',
    test:'测试'
}

export default function rank(state = initialState,action){
    switch(action.type){
        case types.CHANGE_HOME_TITLE:
            return Object.assign({}, state, {
                title:action.title
            });
        default:
            return state
    }
}