import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { editReview, getReviews, } from '../../store/reviews';
import { getOneBook } from '../../store/books';
import './editreview.css'
const EditReview = ({ userReview }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    // const { bookId } = useParams()

    const reviewsObj = useSelector(state => state.reviews.reviews)

    const currentReviews = useSelector(state => Object.values(state.reviews.reviews))

    const user = useSelector(state => state.session.user)

    const userReview1 = currentReviews.find(review => +review.user_id === +user.id)

    const [submit, setSubmit] = useState(false)
    const [validationErrors, setValidationErrors] = useState([])
    const [review, setReview] = useState(userReview1?.review)
    const [stars, setStars] = useState(userReview1?.stars)
    useEffect(() => {
        setReview(userReview1?.review)
        setStars(userReview1?.stars)
    }, [userReview1])
    
    useEffect(() => {
        let errors = []
        if (!review) errors.push('You must have a review longer than 20 characters and less than 5000 characters to submit your review.')
        if (review?.length < 20) errors.push('Review must be longer than 20 characters.')
        if (review?.length > 5000) errors.push('Review must be less than 5000 characters. Revision is key my friend!')
        setValidationErrors(errors)
    }, [review])
    if (!userReview1) return null

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            id: userReview1?.id,
            review,
            stars,
            book_id: userReview1?.book_id,
            user_id: user.id
        }
        setSubmit(true)
        if (validationErrors.length){
            return;
        }
        let updatedReview = await dispatch(editReview(payload, userReview1))

        if (updatedReview) {
            // dispatch(getOneBook(payload.book_id))
           
            return history.push(`/books/${payload.book_id}`)
        }
    }

    return (
        <>
        <div className='biggest-review'>
            <section className='whole-editr-page'>
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
                        onChange={e => setReview(e.target.value)} 
                        className='review-input' />
                    <input
                        type='number'
                        min={1}
                        max={5}
                        value={stars}
                        onChange={e => setStars(e.target.value)} 
                        className='stars-input'/>
                    <button type='submit' className='edit-review-button'>Edit Review</button>
                </form>
            </section>
            </div>
        </>
    )
}


export default EditReview;