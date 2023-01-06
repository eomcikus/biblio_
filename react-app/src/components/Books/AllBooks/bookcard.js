import './bookcard.css'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
const BookCard = ({ book }) => {
    const user = useSelector(state => state.session.user)

    return (
        <div className='bookcard-container'>
        <NavLink to={`/books/${book.id}`}
            className='bookcard-container'>
                <img className='thumbnail' src={book.thumbnail} onError={e => e.target.src = "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"} />
            </NavLink>

            </div>
    )

}

export default BookCard