import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import { getBooks } from '../../../store/books';
import BookCard from './bookcard';
import './allbooks.css'
const AllBooks = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books.allBooks)
    const booksArray = Object.values(books)
    const user = useSelector(state=> state.session.user)
    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch,])

        return (
            <>
            <div className='allbooks-container'>

                {booksArray.map(book => (
                    <div>
                        <BookCard key={book.id} book={book} />
                    </div>
                ))}
            </div>
            {user && (
                <button><NavLink to='/books/add'>Create a Book</NavLink></button>
            )}
            
</>
        )
    }
}
export default AllBooks