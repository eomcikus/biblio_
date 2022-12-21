//definitions
const LOAD = '/books/LOAD'

//actions
const load = books => ({
    type: LOAD,
    books
})

//thunks
export const getBooks = () => async (dispatch) => {
    const response = await fetch('/api/books')
    if (response.ok) {
        const books = await response.json()
        dispatch(load(books))
    }
}
let initialState = {
    allBooks: {},
    currentBook: {}
}
//reducer. 
export const booksReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            return {...state, ...action.books.books}
            // newState = { allBooks: {}, currentBook: {} }
            // newState.allBooks = {}
            // action.books.allBooks.forEach(book => {
            //     newState.allBooks[book.id] = book
            // })
            // return newState
        }
        default: return state
    }
}