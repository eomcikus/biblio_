
const LOAD = '/tags/LOAD'


const load = tags => ({
    type: LOAD,
    tags
})

export const getTags = (bookId) => async dispatch => {
    const response = await fetch(`/api/tags/${bookId}`)
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
            action.tags.forEach(tag => {
                newState.tags[tag.id] = tag
            })
            return newState;
        }
    }
}