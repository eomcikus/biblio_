import { getReviews } from "../../store/reviews";
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import ReviewForm from "./AddReview/ReviewForm";
import AddReviewModal from "./AddReview";
import './reviewcard.css'
export const Reviews = () => {
    const { bookId } = useParams()
    const dispatch = useDispatch()
    let reviews = useSelector(state => Object.values(state.reviews.reviews))
    const user = useSelector(state => state.session.user)

    let reviewsforBook = reviews.filter(review => +review.book_id === +bookId)
 
    let userReview;
    if (user) {
        userReview = reviews.find(review => review.user_id === user.id)
    } else {
        userReview = 0
    }

    useEffect(() => {
        dispatch(getReviews(bookId))
    }, [dispatch])
    

    return (
        <>
            <div>{reviewsforBook.map(review => <div key={review.id} className='reviewcard-container'><div className='review-text'>{review.review}</div> <div className='star-container'><div className='tinystar'>⭑</div>  {review.stars}</div></div>)}
                {user && !userReview && (
                <button>
                    {/* <NavLink className='create-review-navlink' to={`/books/${bookId}/reviews/add`}>Create a Review</NavLink> */}
                    <AddReviewModal className='create-review-navlink'/>
                </button>
                 )}
                {user && userReview &&(  
                <button>
                    <NavLink className='edit-review-navlink' to={`/books/reviews/edit/${userReview.id}`} userReview={userReview}>
                        Edit Review
                    </NavLink>
                </button>
                    )}
                {user && userReview &&(  
                <button>
                    <NavLink className='delete-review-navlink' to={`/books/reviews/${userReview.id}/delete`} userReview={userReview}>
                        Delete Review
                    </NavLink>
                </button>
                  )} 
                {!user && (
                    <div className='review-not-logged'>Login now to write a review!</div>
                )}
            </div>
        </>

    )
}