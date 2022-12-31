import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { editReview } from '../../store/reviews';


const EditReview = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {bookId} = useParams()
    const currentReviews = useSelector(state=> Object.values(state.reviews.reviews))
    const user = useSelector(state => state.session.user)
    const userReview = currentReviews.find(review => review.user_id === user.id)

    const [review, setReview] = useState(userReview.review)
    const [stars, setStars] = useState(userReview.stars)
    useEffect(() => {
        setReview(userReview.review)
        setStars(userReview.stars)
    }, [userReview])
    if (!userReview) return null
    if (!review) return null
    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            id: userReview.id,
            review,
            stars,
            book_id: bookId,
            user_id: user.id
        }
        let updatedReview = await dispatch(editReview(payload))
        if (updatedReview){
            history.push(`/books/${bookId}`)
        }
    }

        return (
            <button onSubmit={handleSubmit}>Edit Review</button>

        )
}


export default EditReview;