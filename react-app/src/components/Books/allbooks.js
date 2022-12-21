import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getBooks } from '../../store/books';

const AllBooks = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books.allBooks)
    const booksArray = Object.values(books)
    console.log(booksArray)
    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch])
 return (
    <div> 
        {booksArray.map(book => (
            <div key={book.id}>
                {book.title}
                </div>
        ))}
    </div>
 )
}
export default AllBooks