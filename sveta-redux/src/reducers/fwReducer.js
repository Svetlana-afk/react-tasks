import { actionTypes } from '../actions/actionTypes';
const initialState = {
    items: {
        45645: { name: "Angular", count: 0},
        12345: {name: "React", count: 0},
        12347: {name: "Vue", count: 0} 
    },
    itemsIds: [45645, 12345, 12347],
    total: 0
}

export default function fwReducer(state = initialState, action) {
    switch (action.type) {
        case (actionTypes.inc): {
            const id = action.payload;
            let items = { ...state.items };
            items[id].count += 1;
            return { ...state, items, total: state.total+1};
        }
        default: return state
    }
}