import * as types from '../actions/ActionTypes';

const initialState = {
    number : 0, //초기값 설정
    dumbObject: {
        d:0,
        u:1,
        m:2,
        b:3
    }
};
/*
export default function counter(state, action) {
    if(typeof state === 'undefined') {
        return initialState;
    }

    return state;
}*/

//함수의 파라미터에 기본인수를 적으면 undefined일때는 기본인수를 사용한다.
export default function counter(state = initialState, action) {

    switch(action.type){
        case types.INCREMENT:
            return {...state, number:state.number + 1, dumbObject:{...state.dumbObject, u:0}
        }/* 새로운 객체를 만든다. ...state로 복사한뒤 number값만 +1하여 반환*/
        case types.DECREMENT:
            return {
                ...state,
                number: state.number -1,
                dumbObject:{...state.dumbObject, u:0}
            }
        default:
            return state;
    }
}
