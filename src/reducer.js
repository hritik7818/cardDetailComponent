export const initialvalue = 0;

export const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + action.payload;
        case "decrement":
            return state - action.payload
        default:
            return state;
    }
}