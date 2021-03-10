
const initialState = {
    Angular: 0,
    React: 0,
    Vue: 0
  }

export default function fwReducer(state = initialState, action) {
    switch (action.type) {
        case ('INC'): {
            let name = action.payload;
            let newState = {...state};
            newState[name]+=1;
            return newState;
        }     
        default: return state   
    }
}