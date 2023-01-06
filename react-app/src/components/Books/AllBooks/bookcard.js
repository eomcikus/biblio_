import './bookcard.css'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
const BookCard = ({ book }) => {
    const user = useSelector(state => state.session.user)

    return (
        <div className='bookcard-container'>
        <NavLink to={`/books/${book.id}`}
            className='bookcard-container'>
                <img className='thumbnail' src={book.thumbnail} />
            </NavLink>

            </div>
    )

}

export default BookCard