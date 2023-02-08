import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"
import {useHistory, useParams} from 'react-router-dom'
import { deleteBookFromShelf } from "../../store/shelves";

const DeleteBFromShelf = ({bookId}) => {
    const dispatch = useDispatch()
    console.log('bookid', bookId)
    const books = useSelector(state=> state.shelves.shelves.books)
    const book = books.find(book => book.bookId === bookId) 
    console.log(books)
    console.log(book)
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteBookFromShelf(book.id))
    }
    return (
       <div><button onClick={handleDelete}>Delete</button></div> 
    )
}

export default DeleteBFromShelf;