//definitions
const LOAD = '/books/LOAD'
const VIEWONE = '/books/VIEWONE'
const CREATE = '/books/CREATE'
const DELETE = '/books/DELETE'
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

const delBook = bookId => ({
    type: DELETE,
    bookId
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
    console.log('in the thunk')
    if (response.ok){
        const book = await response.json()
        dispatch(view(book))
    }
}

export const createBook = (form) => async (dispatch) => {
    const response = await fetch('/api/books', {
        method: 'POST',
        body: JSON.stringify({
            title: form.title,
            author: form.author,
            summary: form.summary,
            author_about: form.author_about,
            thumbnail: form.thumbnail
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok){
        const newBook = await response.json()
        dispatch(create(newBook))
        return newBook
    }
}

export const deleteBook = (bookId) => async (dispatch) => {
    const response = await fetch(`api/books/${bookId}`, {
        method: 'DELETE'
    })
    if (response.ok){
        dispatch(delBook(bookId))
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
        case CREATE: {
            newState = { ...state, currentBook: {...state.currentBook}}
            newState.allBooks[action.book.id] = action.book
            return newState
        }
        default: return state
    }
}