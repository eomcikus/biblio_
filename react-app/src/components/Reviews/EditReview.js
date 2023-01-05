import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { editReview } from '../../store/reviews';


const EditReview = ({ userReview }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    // const { bookId } = useParams()

    const reviewsObj = useSelector(state => state.reviews.reviews)

    const currentReviews = useSelector(state => Object.values(state.reviews.reviews))

    const user = useSelector(state => state.session.user)

    const userReview1 = currentReviews.find(review => +review.user_id === +user.id)


    const [review, setReview] = useState(userReview1?.review)
    const [stars, setStars] = useState(userReview1?.stars)
    useEffect(() => {
        setReview(userReview1?.review)
        setStars(userReview1?.stars)
    }, [userReview1])
    // if (!userReview) return null

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            id: userReview1.id,
            review,
            stars,
            book_id: userReview1.id,
            user_id: user.id
        }
        let updatedReview = await dispatch(editReview(payload, userReview1))
        if (updatedReview) {
            history.push(`/books/${payload.book_id}`)
        }
    }

    return (
        <>
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
                    <button onSubmit={handleSubmit}>Edit Review</button>
                </form>
            </section>
        </>
    )
}


export default EditReview;