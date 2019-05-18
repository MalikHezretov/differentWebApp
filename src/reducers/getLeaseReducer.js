import {
    FETCH_ITEM_PENDING, 
    FETCH_ITEM_SUCCESS, 
    FETCH_ITEM_ERROR
} from '../actions/fetchLeaseItem';

const initialState = {
    pending: false,
    item: {},
    error: null
}

const getLeaseReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ITEM_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_ITEM_SUCCESS:
            return {
                ...state,
                pending: false,
                item: action.payload
            }
        case FETCH_ITEM_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export default getLeaseReducer