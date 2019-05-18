export const FETCH_ITEM_PENDING = 'FETCH_ITEM_PENDING';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_ERROR = 'FETCH_ITEM_ERROR';

const fetchItemPending = () => ({type: FETCH_ITEM_PENDING});

const fetchItemSuccess = json => ({type: FETCH_ITEM_SUCCESS, payload: json});

const fetchItemError = error => ({type: FETCH_ITEM_ERROR, payload: error})

function fetchLeaseItem(id) {
    return dispatch => {
        dispatch(fetchItemPending());
        fetch('https://hiring-task-api.herokuapp.com/v1/leases/:'+id)
        .then(res => res.json())
        .then(res => {
            // console.log('SELECTED_LEASE', res);
            dispatch(fetchItemSuccess(res));
        })
        .catch(error => {
            dispatch(fetchItemError(error));
        })
    }
}

export default fetchLeaseItem;
