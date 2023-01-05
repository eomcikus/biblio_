//definitions
const LOAD = '/books/LOAD'
const VIEWONE = '/books/VIEWONE'
const CREATE = '/books/CREATE'
const DELETE = '/books/DELETE'
const EDIT = '/books/EDIT'
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

const edit = bookId => ({
    type: EDIT,
    bookId
})
//thunks
export const getBooks = () => async (dispatch) => {
    const response = await fetch('/api/books/')
    if (response.ok) {
        const books = await response.json()
        dispatch(load(books))
    }
}

export const getOneBook = (bookId) => async (dispatch) => {
    const response = await fetch(`/api/books/${bookId}`)
    if (response.ok) {
        const book = await response.json()
        dispatch(view(book))
    }
}

export const createBook = (form) => async (dispatch) => {
    const response = await fetch(`/api/books/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: form.title,
            author: form.author,
            summary: form.summary,
            author_about: form.author_about,
            thumbnail: form.thumbnail
        }),
    })
    if (response.ok) {
        const newBook = await response.json()
        dispatch(create(newBook))
        return newBook
    }
}

export const deleteBook = (bookId) => async (dispatch) => {
    const response = await fetch(`/api/books/delete/${bookId}`, {
        method: 'DELETE',

    })
    if (response.ok) {
        dispatch(delBook(bookId))
    }
    return await response.json()
}

export const editBook = (form, bookId, user) => async (dispatch) => {
    const response = await fetch(`/api/books/edit/${bookId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: form.id,
            title: form.title,
            author: form.author,
            summary: form.summary,
            author_about: form.author_about,
            thumbnail: form.thumbnail,
            user_id: form.user_id
        }),

    })
    if (response.ok) {
        dispatch(edit(form.id))
        return await response.json()
    }

}

let initialState = { allBooks: {}, oneBook: {} }
//reducer. 
export const booksReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            newState = { allBooks: {} }
            newState.allBooks = {}
            action.books.books.forEach(book => {
                newState.allBooks[book.id] = book
            })
            return newState
        
        }
    
        case VIEWONE: {
            newState = { ...state }
            newState.oneBook = { ...action.book.book }
            return newState
        }
        case CREATE: {
            newState = { ...state }
            newState.allBooks[action.book.id] = action.book.book
            return newState
        }
        case DELETE: {
            newState = { ...state }
            delete newState.allBooks[action.bookId]
            return newState
        }
        case EDIT: {
            newState = { ...state }
            newState.allBooks[action.bookId] = action.bookId
            return newState
        }
    
        default: return state
    }
}
