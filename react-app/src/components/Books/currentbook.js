import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getOneBook } from '../../store/books';
import { useParams } from 'react-router-dom'

const OneBook = () => {
    const dispatch = useDispatch()
    const { bookId } = useParams()
    const book = useSelector(state => state.books.currentBook.book)

    useEffect(() => {
        dispatch(getOneBook(bookId))
    }, [dispatch, bookId])

    if (!book) return null
    return (
        <div>
            {book.title}
            {book.author}
        </div>
    )
}

export default OneBook;