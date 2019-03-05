'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
    title:'是我Rank，哈哈'
}

export default function rank(state = initialState,action){
    switch(action.type){
        case types.CHANGE_CONTENT:
            return Object.assign({}, state, {
                title:action.title
            });
        default:
            return state
    }
}