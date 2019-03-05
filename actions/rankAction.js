'use strict';

import * as types from '../constants/ActionTypes';

export function changeContent(title){
    return dispatch =>{
        dispatch({type:types.CHANGE_CONTENT,title:title})
    }
}