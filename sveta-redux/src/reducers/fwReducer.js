import { actionTypes } from '../actions/actionTypes';
const initialState = {
    items: {
        Angular: 0,
        React: 0,
        Vue: 0
    },
    itemsName: ["Angular", "React", "Vue"],
    total: 0
}

export default function fwReducer(state = initialState, action) {
    switch (action.type) {
        case (actionTypes.inc): {
            const name = action.payload;
            let items = { ...state.items };
            items[name] += 1;
            return { ...state, items, total: state.total+1};
        }
        default: return state
    }
}