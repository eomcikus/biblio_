import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';


const EditReview = () => {
    const dispatch = useDispatch()
    const {bookId} = useParams()
    const currentReviews = useSelector(state=> state.reviews.reviews)
    const user = useSelector(state => state.session.user)
    const userReview = currentReviews.find(review => review.user_id === user.id)
    const [review, setReview] = useState(userReview.review)
    const [stars, setStars] = useState(userReview.stars)

    useEffect(() => {
        setReview(userReview.review)
        setStars(userReview.stars)
    }, [userReview])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            id: userReview.id,
            review,
            stars,
            book_id: bookId,
            user_id: user.id
        }
    }

        return (
            <button onSubmit={handleSubmit}>Edit Review</button>
        )
}


export default EditReview;