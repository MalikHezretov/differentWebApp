export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

const fetchProductsPending = () => ({type: FETCH_PRODUCTS_PENDING});

const fetchProductsSuccess = json => ({type: FETCH_PRODUCTS_SUCCESS, payload: json});

const fetchProductsError = error => ({type: FETCH_PRODUCTS_ERROR, payload: error})

function fetchLeases() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('https://hiring-task-api.herokuapp.com/v1/leases')
        .then(res => res.json())
        .then(res => {
            dispatch(fetchProductsSuccess(res));
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchLeases;
