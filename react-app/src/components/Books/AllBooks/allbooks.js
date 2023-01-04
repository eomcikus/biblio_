import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getBooks } from '../../../store/books';
import BookCard from './bookcard';
import './allbooks.css'
const AllBooks = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books.allBooks)

    const booksArray = Object.values(books)
    console.log(booksArray)
    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch,])
    if (books) {
        return (
            <div className='allbooks-container'>

                {booksArray.map(book => (
                    <div>
                        <BookCard key={book.id} book={book} />
                    </div>
                ))}
            </div>
        )
    }
}
export default AllBooks