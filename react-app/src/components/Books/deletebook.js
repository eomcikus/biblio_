import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { deleteBook } from '../../store/books';
import { useParams, useHistory } from 'react-router-dom'

const DeleteBook = () => {
    const { bookId } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const handleDelete =  (e) =>{
        e.preventDefault()
        dispatch(deleteBook(bookId))
        history.push('/books')
    }
    return (
        <button onClick={handleDelete}>
            Delete
        </button>
    )
}

export default DeleteBook;