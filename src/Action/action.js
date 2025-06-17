import { FETCH_DATA } from '../Action/action.js';

export const fetchData = () => {
    return async (dispatch) => {
        const response = await fetch('/data/db.json');
        const data = await response.json();
        dispatch({ type: FETCH_DATA, payload: data });
        
    };
};    