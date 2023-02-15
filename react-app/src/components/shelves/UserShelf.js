import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserShelf } from "../../store/shelves";
import './usershelf.css'
import DeleteBookModal from "./Delete/DeleteBookSModal";
import { NavLink, useHistory, useNavigate } from "react-router-dom";
import BookCard from "./BookShelfCards";
export const UserShelf = () => {
    let dispatch = useDispatch()
    const history = useHistory()
    // let shelf = useSelector(state => state.shelves.shelves)
    // console.log('shelf', shelf)
    let shelves = useSelector(state => state.shelves)

    let books1 = useSelector(state => state.shelves.shelves.books)
    const handleClick = async (e)  => {
        e.preventDefault()
        history.push(`/books/`)
    }
    useEffect(() => {
        dispatch(getUserShelf())
    }, [dispatch])
    // if (!books1) return null;
    return (
        <>

            <div className='shelf-holder'>
                {books1 && (

                    <div className='shelf-container'>{books1.map(book =>

                        <div key={book.id} className='wrapper'>
                            {console.log(book)}
                            <img className='shelf-thumbnail' src={book.thumbnail} onClick={() => history.push(`/books/${book.bookId}`)}/>
                            <div className='on-hover'>
                        
                            <DeleteBookModal bookId={book.bookId} /></div></div>)}

                            
                            </div>
                )}
 
                {!books1 && (
                    <div className="no-books-msg">No books on your bookshelf...yet.</div>
                )}
            </div>

        </>
    )
}