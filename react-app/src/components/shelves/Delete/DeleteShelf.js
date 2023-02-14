import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { useHistory, useParams, Redirect } from 'react-router-dom'
import { deleteBookFromShelf, getUserShelf } from "../../../store/shelves";
import './deletebookfromshelf.css'
const DeleteBFromShelf = ({ bookId, setShowModal }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const books = useSelector(state => state.shelves.shelves.books)
    const thebook = books.find(book => book.bookId === book.id)


    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(deleteBookFromShelf(bookId))
        await dispatch(getUserShelf())
        setShowModal(false)
        return
    }
    return (
        <div className="delete-book-modal">
            <h3 className='are-you-sure-shelf'>Are you sure? Pressing this button will remove the book from your bookshelf. This cannot be undone. </h3>
            <button onClick={handleDelete}>I am sure, remove.</button></div>
    )
}

export default DeleteBFromShelf;