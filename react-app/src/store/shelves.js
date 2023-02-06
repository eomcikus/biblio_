

const LOAD = '/shelves/LOAD'
const USER = '/shelves/USER'
const ADD = '/shelves/ADD'
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
export const getShelves = () => async (dispatch) => {
    const response = await fetch('/api/shelves/')
    console.log('thunk')
    if (response.ok){
        const shelves = await response.json()
        console.log('shelves thunk', shelves)
        dispatch(load(shelves))
    }
}

export const getUserShelf = () => async (dispatch) => {
    const response = await fetch('/api/shelves/user')
    if (response.ok){
        const shelf = await response.json()
        dispatch(user(shelf))
    }
}

export const addBookToShelf = (shelf_id, book_id) => async (dispatch) => {
    const response = await fetch(`/api/shelves/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'shelf_id': shelf_id,
            'book_id': book_id
        })
    })
    if (response.ok){
        const shelf = response.json()
        dispatch(add(shelf))
    }
}
let initialState = { shelves: {}}
export const shelvesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type){
        case LOAD: {
            newState = { shelves: {}}
            action.shelves.shelves.forEach(shelf => {
                newState.shelves[shelf.id] = shelf
            })
            return newState;
        }
        case USER: {
            newState = {shelves: {}}
            newState= {...action.shelf}
            return newState
        }
        case ADD: {
            newState = {shelves: {}}
            newState.shelves[action.shelf.id]= action.shelf
            return newState
        }   
        default: return state
    }
}