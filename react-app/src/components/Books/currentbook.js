import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getOneBook } from '../../store/books';
import  EditBook  from './EditBook'
import { Reviews } from '../Reviews/Reviews';
import { useParams } from 'react-router-dom'
import './currentbook.css'
const OneBook = () => {
    const dispatch = useDispatch()
    const { bookId } = useParams()
    const book = useSelector(state => state.books.allBooks)
console.log('one book', book)
    useEffect(() => {
        dispatch(getOneBook(bookId))
    }, [dispatch, bookId])

    if (!book) return null
    return (
        <div className='current-book-container'>
            <img className='current-book-thumbnail' src={book.thumbnail} />
            <div className='current-book-info'>
                {book.title} <p></p>
               by: {book.author}
            </div>
            <div className='current-book-summary'>
                {book.summary}
            </div>
            <div>
                <EditBook book={book} />
                <Reviews book={book} />
            </div>
        </div>
    )
}

export default OneBook;