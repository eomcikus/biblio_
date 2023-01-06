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
    const [review, setReview] = useState('')
    const [stars, setStars] = useState('')
    const [validationErrors, setValidationErrors] = useState([])
    const [submit, setSubmit] = useState(false)
    const user = useSelector(state => state.session.user)

    const reviewArr = useSelector(state => Object.values(state.reviews.reviews))
    useEffect(() => {
        let errors = []
        if (!review) errors.push('You must have a review longer than 20 characters and less than 5000 characters to submit your review.')
        if (review.length < 20) errors.push('Review must be longer than 20 characters.')
        if (review.length > 5000) errors.push('Review must be less than 5000 characters. Revision is key my friend!')
        setValidationErrors(errors)
    }, [review])

    let reviewByUser;
    if (reviewArr && user) {
        reviewByUser = reviewArr.find(review => +user.id === +review.user_id)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            review,
            stars,
            book_id: bookId,
            user_id: user.id
        }
        setSubmit(true)
        if (validationErrors.length) {
            return
        }
        let createdReview = await dispatch(addReview(payload, bookId))
        if (createdReview) {
            await dispatch(getReviews(bookId))
            history.push(`/books/${bookId}`)
            return
        }
    }
    return (
        <section>
            <h2>Reviews</h2>
            {!user && (
                <div>Log in to leave a review!</div>
            )}
            {user  && (
            <form onSubmit={handleSubmit}>
                {submit && !!validationErrors.length && (
                    <ul className='errors'>
                        {validationErrors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                )}
                <input type='text'
                    value={review}
                    onChange={e => setReview(e.target.value)} />
                <input
                    type='number'
                    min={1}
                    max={5}
                    value={stars}
                    onChange={e => setStars(e.target.value)} />
                {/* {user  && ( */}
                    <button type='submit'
                        onSubmit={handleSubmit}>Submit Review</button>

                {/* <EditReview /> */}
            </form>
                )}
        </section>
    )
}

export default ReviewForm;

