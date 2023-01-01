
import {NavLink} from 'react-router-dom'
const ReviewCard = ({ review }) => {
    return (
        <div className='reviewcard-container'>
            {review.review}
            {review.stars}
            </div>
    )

}

export default ReviewCard