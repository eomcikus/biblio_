//Definitions
const LOAD = 'reviews/LOAD'

//Actions
const load = reviews => ({
    type: LOAD,
    reviews
})

//Thunks
export const getReviews = (book_id) => async dispatch => {
    const response = await fetch(`/api/spots/${book_id}/reviews`)
    if (response.ok){
        const data = await response.json()
        dispatch(load(data.Reviews))
    } else {
        return null;
    }
}

let initialState = {
    book: {},
    user: {}
}

//Reducer
export const reviewReducer = (state = initialState, action) => {
    let newState;
    switch(action.type){
        case LOAD : {
            newState = { book: {}, user: {} }
            
        }
        default: return state
    }
}