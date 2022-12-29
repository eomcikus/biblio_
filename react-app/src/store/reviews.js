//Definitions
const LOAD = '/reviews/LOAD'

//Actions
const load = reviews => ({
    type: LOAD,
    reviews
})

//Thunks
export const getReviews = (bookId) => async dispatch => {
    console.log('at least here')
    const response = await fetch(`/api/books/${bookId}/reviews`)
    if (response.ok) {
        const data = await response.json()
        console.log('data', data)
        dispatch(load(data.book_reviews))
    } else {
        return null;
    }
}

let initialState = {
    book: {},
    reviews: {}
}

//Reducer
export const reviewReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            newState = { book: {}, reviews: {} }
            action.reviews.forEach(review => {
                newState.reviews[review.id] = review
            })
            return newState;
            // if (!action.reviews){
            //     return state.reviews
            // }
        }
        default: return state
    }
}