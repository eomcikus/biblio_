import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getBooks } from '../../store/books';

const AllBooks = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books)
    const booksArray = Object.values(books)
    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch])
 return (
    <div> 
        {console.log('GREETINGS')}
    </div>
 )
}
export default AllBooks