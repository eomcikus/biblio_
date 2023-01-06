
import {NavLink} from 'react-router-dom'
import './reviewcard.css'

const ReviewCard = ({ review }) => {
    return (
        <div className='reviewcard-container'>
           <div className='review-text'> {review.review} </div>
            <div className='review-stars'>{review.stars} </div>
            </div>
    )

}

export default ReviewCard