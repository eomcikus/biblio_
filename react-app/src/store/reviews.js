//Definitions
const LOAD = '/reviews/LOAD'
const ADD = '/reviews/ADD'
//Actions
const load = reviews => ({
    type: LOAD,
    reviews
})

const add = review => ({
    type: ADD,
    review
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

export const addReview = (form, bookId) => async dispatch => {
    const response = await fetch(`/api/books/reviews/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            review: form.review,
            stars: form.stars,
            user_id: form.user_id,
            book_id: form.book_id
        })
    })
    if (response.ok) {
        const newReview = await response.json()
        dispatch(add(newReview))
        return newReview
    }
}

let initialState = {
    reviews: {}
}

//Reducer
export const reviewReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            newState = { reviews: {} }
            action.reviews.forEach(review => {
                newState.reviews[review.id] = review
            })
            return newState;
            // if (!action.reviews){
            //     return state.reviews
            // }
        }
        case ADD: {
            newState = { ...state, reviews: { ...state.reviews } }
            newState.reviews[action.review.id] = action.review
            return newState;
        }
        default: return state
    }
}