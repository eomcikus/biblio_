

const LOAD = '/shelves/LOAD'
const USER = '/shelves/USER'
const ADD = '/shelves/ADD'
const REMOVE = '/shelves/REMOVE'
const load = shelves => ({
    type: LOAD,
    shelves
})

const user = shelf => ({
    type: USER,
    shelf
})

const add = shelf => ({
    type: ADD,
    shelf
})
const remove = bookId => ({
    type: REMOVE,
    bookId
})
export const getShelves = () => async (dispatch) => {
    const response = await fetch('/api/shelves/')
    if (response.ok) {
        const shelves = await response.json()
        dispatch(load(shelves))
    }
}

export const getUserShelf = () => async (dispatch) => {
    const response = await fetch('/api/shelves/user')
    if (response.ok) {
        const shelf = await response.json()
        dispatch(user(shelf))
    } 
}

export const addBookToShelf = (payload, book_id) => async (dispatch) => {
    const response = await fetch(`/api/shelves/${book_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    if (response.ok) {
        const shelf = await response.json()
        dispatch(add(shelf))
        return shelf;
    }
}

export const deleteBookFromShelf = (bookId) => async dispatch => {
    const response = await fetch(`/api/shelves/${bookId}/delete`, {
        method: 'DELETE'
    })

    if (response.ok){
        const book = await response.json()
        dispatch(remove(book.id))
        return
    }
}
let initialState = { shelves: {} }
export const shelvesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            newState = { shelves: {} }
            action.shelves.shelves.forEach(shelf => {
                newState.shelves[shelf.id] = shelf
            })
            return newState;
        }
        case USER: {
            newState = { shelves: {} }
            if (action.shelf){
                newState = { ...action.shelf }
                return newState
            } else {
                return newState.shelves.shelves.books = []
            }
            
        }
        case ADD: {
            newState = { shelves: {} }
            newState.shelves[action.shelf.id] = action.shelf
            return newState
        }
        case REMOVE: {
            newState = { shelves: {...state.shelves}}
            delete newState.shelves.books[action.bookId]
            return newState
        }
        default: return state
    }
}