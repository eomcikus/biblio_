import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getOneBook } from '../../../store/books';
import EditBook from '../UpdateBook/EditBook'
import { DeleteBookButton } from '../DeleteBook';
import { Reviews } from '../../Reviews/Reviews';
import { useParams, NavLink } from 'react-router-dom'
import './currentbook.css'
import DeleteBook from '../DeleteBook/deletebook';
import { getReviews } from '../../../store/reviews';
import EditReview from '../../Reviews/EditReview/EditReview'
import { AddBook2Shelf } from '../../shelves/AddABookToShelf';
import AddReviewModal from '../../Reviews/AddReview';
import DeleteBookModal from '../DeleteBook';
const OneBook = () => {
    const dispatch = useDispatch()
    const { bookId } = useParams()
    const book = useSelector(state => state.books.oneBook)
    let bookOwner;
    if (book) {
        bookOwner = book['user_id']
    }
    const reviews = useSelector(state => state.reviews)
    const user = useSelector(state => state.session.user)
    const reviewsArr = useSelector(state => Object.values(state.reviews.reviews))
    let userReview;
    if (user && reviewsArr) {
        userReview = reviewsArr.filter(review => user.id === review.user_id)
    }
    useEffect(() => {
        dispatch(getOneBook(bookId))

    }, [dispatch, bookId, reviews])

    if (reviewsArr.length && book) {
        let total = 0

        reviewsArr.forEach(review => {
            total += review.stars
        })
        let starAvg = total / reviewsArr.length
        if (!starAvg) {
            book['starAvg'] = 'No Reviews Yet'
        } else {
            book['starAvg'] = parseFloat(starAvg).toFixed(2)
        }
    }




    if (!book) return null
    return (
        <>
            <div className='whole-curr-container'>
                <div className='current-book-container'>
                    <div className='current-book-thumb-container'>
                        <img className='current-book-thumbnail' src={book.thumbnail} onError={e => e.target.src = "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"} /></div>
                    <div className='current-book-info-container'>
                        <div className='current-book-title'>
                            {book.title}     </div>
                        <div className='current-book-author'> {book.author} </div>
                        <div className='star-reviews-container'><div className='tinystar'>⭑</div> {book.starAvg ? parseFloat(book.starAvg).toFixed(2) : 'No Reviews'}</div>
                        <div className='current-book-summary'>
                            {book.summary}
                        </div>
                        <div><AddBook2Shelf book_id={bookId} /></div>
                        <div>
                            {user && user.id === bookOwner && (
                                <button className='edit-book-nav'><NavLink className='edit-book-nav' to={`/books/edit/${bookId}`}>Edit My Book</NavLink></button>
                            )}
                            {user && user.id === bookOwner && (
                                // <DeleteBook book={book} />
                                <DeleteBookModal book={book} />
                            )}
                            {/* {user && userReview && ( */}

                            {/* <EditReview review={userReview} />  */}
                            {/* )} */}
                            <div className='reviews-on-curr-book'> Reviews </div>
                            <Reviews book={book} />
                            {/* <DeleteBookButton book={book} /> */}
                        </div>
                        {/* About the author
                        <div className='author-about'>{book.author_about}</div>  */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OneBook;