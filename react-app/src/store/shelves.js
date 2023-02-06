

const LOAD = '/shelves/LOAD'
const USER = '/shelves/USER'

const load = shelves => ({
    type: LOAD,
    shelves
})

const user = shelf => ({
    type: USER,
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
            newState.userShelf = {...action.shelf}
            return newState
        }
        default: return state
    }
}