import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addBookToShelf, getUserShelf } from "../../store/shelves";
import { NavLink, useHistory } from "react-router-dom";

export const AddBook2Shelf = (book_id) => {
    const dispatch = useDispatch()
    const history = useHistory()
    // const book_id = useSelector(state=> state.books.oneBook.id)
    // const shelf_id = useSelector()
    let id = +book_id.book_id
    // console.log('bookid', bookId)
    const shelf_id = useSelector(state => state.shelves.shelves.id)

    useEffect(() => {
        dispatch(getUserShelf())
        // dispatch(addBookToShelf(book_id, shelf_id))
    }, [dispatch])
    const handleSubmit = async (e) => {

        e.preventDefault()
        const payload = {
            book_id,
            shelf_id
        }
        let createdShelf = await dispatch(addBookToShelf(payload, id, shelf_id))
        if (createdShelf){
            await dispatch(getUserShelf())
            history.push('/shelves/user')
        }
    }
    if (!shelf_id) return null
    return (
       <button type='submit' onClick={handleSubmit}>Add to My Shelf</button>
    )
}