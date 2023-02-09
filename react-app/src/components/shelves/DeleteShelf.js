import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"
import {useHistory, useParams, Redirect} from 'react-router-dom'
import { deleteBookFromShelf, getUserShelf } from "../../store/shelves";

const DeleteBFromShelf = ({bookId}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const books = useSelector(state=> state.shelves.shelves.books)
    const book = books.find(book => book.bookId === bookId) 


    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(deleteBookFromShelf(bookId))
        await dispatch(getUserShelf())
        return
    }
    return (
       <div><button onClick={handleDelete}>Delete</button></div> 
    )
}

export default DeleteBFromShelf;