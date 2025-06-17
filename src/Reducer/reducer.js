import { FETCH_DATA } from "../Actiontype/actiontype";

const initialState = {   
    data: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;