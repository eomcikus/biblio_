import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"
import {useHistory, useParams} from 'react-router-dom'
import { deleteBookFromShelf } from "../../store/shelves";

const DeleteBFromShelf = ({bookId}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const books = useSelector(state=> state.shelves.shelves.books)
    const book = books.find(book => book.bookId === bookId) 

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteBookFromShelf(bookId))
        history.push('/shelves/user')
    }
    return (
       <div><button onClick={handleDelete}>Delete</button></div> 
    )
}

export default DeleteBFromShelf;