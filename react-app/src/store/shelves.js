

const LOAD = '/shelves/LOAD'


const load = shelves => ({
    type: LOAD,
    shelves
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
let initialState = { shelves: {}}
export const shelvesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type){
        case LOAD: {
            newState = { shelves: {}}
            newState.shelves = {}
            action.shelves.forEach(shelf => {
                newState.shelves[shelf.id] = shelf
            })
            return newState;
        }
        default: return state
    }
}