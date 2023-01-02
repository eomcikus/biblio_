import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { editReview } from '../../store/reviews';


const EditReview = ({review}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {bookId} = useParams()


    const reviewsObj = useSelector(state=>state.reviews.reviews)

    const currentReviews = useSelector(state=> Object.values(state.reviews.reviews))
    console.log(currentReviews)
    const user = useSelector(state => state.session.user)

    const userReview = currentReviews.find(review => review.user_id == user.id)

    const [review1, setReview] = useState(userReview.review)
    const [stars, setStars] = useState(userReview.stars)
    // useEffect(() => {
    //     setReview(userReview.review)
    //     setStars(userReview.stars)
    // }, [userReview])
    // if (!userReview) return null
    if (!review1) return null
    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            id: userReview.id,
            review1,
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