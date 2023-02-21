//Definitions
const LOAD = '/reviews/LOAD'
const ADD = '/reviews/ADD'
const DELETE = '/reviews/DELETE'
const EDIT = '/reviews/EDIT'
//Actions
const load = reviews => ({
    type: LOAD,
    reviews
})

const add = review => ({
    type: ADD,
    review
})

const removeR = reviewId => ({
    type: DELETE,
    reviewId
})
const editR = review => ({
    type: EDIT,
    
    review
})
//Thunks
export const getReviews = (bookId) => async dispatch => {

    const response = await fetch(`/api/books/${bookId}/reviews`)
    if (response.ok) {
        const data = await response.json()
        dispatch(load(data.book_reviews))
    } else {
        return null;
    }
}

export const addReview = (form, bookId) => async dispatch => {
    const response = await fetch(`/api/books/${bookId}/reviews/add`, {
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

export const removeReview = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/books/reviews/${reviewId}/delete`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(removeR(reviewId))
    }
}

export const editReview = (form, userReview1) => async (dispatch) => {

    const response = await fetch(`/api/books/reviews/edit/${form.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:
            JSON.stringify({
                id: form.id,
                review: form.review,
                stars: form.stars,
                user_id: form.user_id,
                book_id: form.book_id
            })

    })
    if (response.ok) {
        // const updatedReview = await response.json()
        dispatch(editR(form))
        return response.json()
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
        case DELETE: {
            newState = { ...state, reviews: { ...state.reviews } }
            delete newState.reviews[action.reviewId]
            return newState
        }
        case EDIT: {
            newState = { ...state, reviews: { ...state.reviews } }
            console.log('action.review', action)
            newState.reviews[action.review.id] = action.review
            return newState
        }
        default: return state
    }
}