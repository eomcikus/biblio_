import './bookcard.css'
import {NavLink} from 'react-router-dom'
const BookCard = ({ book }) => {
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