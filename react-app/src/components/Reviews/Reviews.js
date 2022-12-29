import { getReviews } from "../../store/reviews";
import {useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export const Reviews = () => {
    const {bookId} = useParams()
    const dispatch = useDispatch()
    let reviews = useSelector(state => Object.values(state.reviews.reviews))

    let reviewsforBook = reviews.filter(review => +review.book_id === +bookId)
    console.log(reviewsforBook)
    useEffect(() => {
        dispatch(getReviews(bookId))
    }, [dispatch])
    return (
        <div>{reviewsforBook.map(review => <div> {review.review}</div>)}</div>
//    <div></div>
        )
}