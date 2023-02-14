import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { deleteBook } from '../../../store/books';
import { useParams, useHistory } from 'react-router-dom'

const DeleteBook = () => {
    const { bookId } = useParams()
    
    const history = useHistory()
    const dispatch = useDispatch()
    const handleDelete =   (e) =>{
        e.stopPropagation()

        const deleted = dispatch(deleteBook(bookId))
        history.push('/books')
    }
    return (
        <>
        <div> Are you sure? Pressing delete will delete the book and all of the information connected to it. This cannot be undone.</div>
        <button onClick={handleDelete}>
            Delete book
        </button>
        </>
    )
}

export default DeleteBook;