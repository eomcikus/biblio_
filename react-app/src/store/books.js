//definitions
const LOAD = '/books/LOAD'
const VIEWONE = '/books/VIEWONE'
const CREATE = '/books/CREATE'
//actions
const load = books => ({
    type: LOAD,
    books
})

const view = book => ({
    type: VIEWONE,
    book
})

const create = book => ({
    type: CREATE,
    book
})

//thunks
export const getBooks = () => async (dispatch) => {
    const response = await fetch('/api/books')
    if (response.ok) {
        const books = await response.json()
        dispatch(load(books))
    }
}

export const getOneBook = (bookId) => async (dispatch) => {
    const response = await fetch(`/api/books/${bookId}`)
    if (response.ok){
        const book = await response.json()
        dispatch(view(book))
    }
}

export const createBook = (book) => async (dispatch) => {
    const response = await fetch('/api/books', {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok){
        const newBook = await response.json()
        dispatch(create(newBook))
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
            // return {...state, ...action.books.books}
            newState = { allBooks: {}, currentBook: {} }
            newState.allBooks = {}
            action.books.books.forEach(book => {
                newState.allBooks[book.id] = book
            })
            return newState
        }
        case VIEWONE: {
            newState = { allBooks: {}, currentBook: {}}
            newState.currentBook = {...action.book}
            return newState
        }
        default: return state
    }
}