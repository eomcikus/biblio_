
const LOAD = '/tags/LOAD'


const load = tags => ({
    type: LOAD,
    tags
})

export const getTags = (bookId) => async dispatch => {
    console.log('greetings')
    const response = await fetch(`/api/books/${bookId}/tags`)
    if (response.ok) {
        const data = await response.json()
        dispatch(load(data))
    }
}
let initialState = {
    tags: {}
}
export const tagsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            newState = { tags: {} }
            console.log('action.tags', action.tags)
            newState = { ...action.tags.tags }
            return newState;
        }
        default: return state;
    }
}