import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"
import {useHistory, useParams} from 'react-router-dom'
import { removeReview } from "../../store/reviews";
import './reviewcard.css'

const DeleteReview = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const reviews = useSelector(state => state.reviews.reviews)

    const user = useSelector(state => state.session.user)
    const reviewArr = Object.values(reviews)

    const reviewByUser = reviewArr.find(review => review.user_id === user.id)

    const deleteReview = (e) => {
        e.preventDefault()
        dispatch(removeReview(reviewByUser.id))
        history.push(`/books/${reviewByUser.book_id}`)
    }
    return (
        <div className='delete-review-container'>
         Are you sure? Deleting this will delete your entire review. You cannot undo this.
            <button className='delete-review-button' onClick={deleteReview}>I am sure, Delete</button>

        </div>
    )
}

export default DeleteReview;