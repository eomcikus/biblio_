import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getOneBook } from '../../../store/books';
import EditBook from '../UpdateBook/EditBook'
import { DeleteBookButton } from '../DeleteBook';
import { Reviews } from '../../Reviews/Reviews';
import { useParams } from 'react-router-dom'
import './currentbook.css'
import DeleteBook from '../DeleteBook/deletebook';
import  EditReview  from '../../Reviews/EditReview'
const OneBook = () => {
    const dispatch = useDispatch()
    const { bookId } = useParams()
    const book = useSelector(state => state.books.allBooks)
    const reviews = useSelector(state => state.reviews)
    const user = useSelector(state => state.session.user)
    const reviewsArr = useSelector(state => Object.values(state.reviews.reviews))
    const userReview = reviewsArr.filter(review => user.id === review.user_id)
    console.log('userreview', userReview)
    console.log(reviews)
    useEffect(() => {
        dispatch(getOneBook(bookId))
    }, [dispatch, bookId, reviews])

    if (reviewsArr.length) {
        let total = 0

        reviewsArr.forEach(review => {
            total += review.stars
        })
        let starAvg = total / reviewsArr.length
        book['starAvg'] = parseFloat(starAvg).toFixed(2)

    }



    if (!book) return null
    return (
        <div className='current-book-container'>
            <div className='current-book-thumb-container'>
                <img className='current-book-thumbnail' src={book.thumbnail} /></div>
            <div className='current-book-info-container'>
                <div className='current-book-title'>
                    {book.title}     </div>
                <div className='current-book-author'> {book.author} </div>
                <div className='reviews'>{book.starAvg}</div>
                <div className='current-book-summary'>
                    {book.summary}
                </div>
                <div>
                    <EditBook book={book} />
                    <DeleteBook book={book} />
                    {/* {user && userReview && ( */}

                        {/* <EditReview review={userReview} />  */}
                        {/* )} */}
                        <Reviews book={book} />
                    {/* <DeleteBookButton book={book} /> */}
                </div>
            </div>
        </div>
    )
}

export default OneBook;