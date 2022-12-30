
import {NavLink} from 'react-router-dom'
const ReviewCard = ({ review }) => {
    return (
        <div className='reviewcard-container'>
            {review.review}
            </div>
    )

}

export default ReviewCard