import { getReviews } from "../../store/reviews";
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import ReviewForm from "./ReviewForm";
export const Reviews = () => {
    const { bookId } = useParams()
    const dispatch = useDispatch()
    let reviews = useSelector(state => Object.values(state.reviews.reviews))
    const user = useSelector(state => state.session.user)

    let reviewsforBook = reviews.filter(review => +review.book_id === +bookId)
    const userReview = reviews.find(review => review.user_id === user.id)
    useEffect(() => {
        dispatch(getReviews(bookId))
    }, [dispatch])
    

    return (
        <>
            <div>{reviewsforBook.map(review => <div> {review.review} {review.stars}
                {user && userReview &&( 
                <button>
                    <NavLink to={`/books/reviews/edit/${review.id}`} userReview={userReview}>
                    Edit
                    </NavLink>

                </button>
                )}</div>)}
            </div>
            {/* <ReviewForm /> */}
        </>
        //    <div></div>
    )
}