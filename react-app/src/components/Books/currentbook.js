import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getOneBook } from '../../store/books';
import { useParams } from 'react-router-dom'

const OneBook = () => {
    const dispatch = useDispatch()
    const { bookId } = useParams()
    const book = useSelector(state => state.books.currentBook.book)
    console.log(book)
    useEffect(() => {
        dispatch(getOneBook(bookId))
    }, [bookId, dispatch])

    return (
        <div>
            {book.title}
        </div>
    )
}

export default OneBook;