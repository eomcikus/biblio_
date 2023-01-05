import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
// import { addReview } from '../../../store/reviews';
import { getReviews, addReview } from '../../store/reviews';
import EditReview from './EditReview';
const ReviewForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { bookId } = useParams()
    const userId = useSelector(state => state.session.user.id)
    const [review, setReview] = useState('')
    const [stars, setStars] = useState('')
    const [validationErrors, setValidationErrors] = useState([])
    const [submit, setSubmit] = useState(false)

    useEffect(() => {
        let errors = []
        if (!review) errors.push('You must have a review longer than 20 characters and less than 5000 characters to submit your review.')
        if (review.length < 20) errors.push('Review must be longer than 20 characters.')
        if (review.length > 5000) errors.push('Review must be less than 5000 characters. Revision is key my friend!')
    }, [review])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            review,
            stars,
            book_id: bookId,
            user_id: userId
        }
        let createdReview = await dispatch(addReview(payload, bookId))
        if (createdReview) {
            await dispatch(getReviews(bookId))
            history.push(`/books/${bookId}`)
            return
        }
    }
    if (!userId) return 
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input type='text'
                    value={review}
                    onChange={e => setReview(e.target.value)} />
                <input
                    type='number'
                    min={1}
                    max={5}
                    value={stars}
                    onChange={e => setStars(e.target.value)} />
                <button type='submit'
                onSubmit={handleSubmit}>Submit Review</button>
                {/* <EditReview /> */}
            </form>
        </section>
    )
}

export default ReviewForm;

