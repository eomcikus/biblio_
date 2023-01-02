import { DeleteBook } from './deletebook'
import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'


export const DeleteBookButton = ({book}) => {
    const {bookId} = useParams()
    return (
        <>
        <button className='deleteBookButton'>
            <NavLink to={`/delete/${book.id}`}>Delete</NavLink>
        </button>
        </>
    )
}