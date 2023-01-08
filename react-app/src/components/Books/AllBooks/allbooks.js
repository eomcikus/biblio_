import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getBooks } from '../../../store/books';
import BookCard from './bookcard';
import './allbooks.css'
const AllBooks = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books.allBooks)
    const booksArray = Object.values(books)
    const user = useSelector(state => state.session.user)
    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch,])

    return (
        <>
            <div className='allbooks-container'>

                {booksArray.map(book => (
                    <div>
                        <BookCard key={book.id} book={book} />
                    </div>
                ))}

            </div>
            {user && (
                <>
                <div className='logged-in-container'>
                <div className='logged-in-text'>Share the magic of your favorite book.</div>
                <button><NavLink to='/books/add' className='book-button'>Add a Book</NavLink></button>
                </div>
            </>
            )}
            {!user && (
            <div className='uge-div'>
            <div className='frontpage-container'>
            <div className='first-div'>
               <div className='intro-header'>Find your next story here.</div> 
                    <div className='intro-text'>
                    Feeling stuck in a rut lately, reading the same books over and over again with your child?
                    You've stumbled upon the perfect place. Browse hundreds of books 
                    that have been vetted by other parents, teachers, and librarians as books that will
                    entertain both you and your child. Dive into exciting, age-appropriate books
                    that will keep kids' attention and help them practice important skills like empathy. 
                    KidLit will help you instill a love of reading, no matter the age.
                    </div>
            </div>
            <div className='first-div'>
               <div className='intro-header'>Share your journey.</div>
               <div className='intro-text'> Don't see your favorite children's book? Sign up today to add it to KidLit's collection.
                   Share your journey and experiences with different read-alouds by creating, editing or deleting reviews. 
                   Even better, let your children help you craft a review and let them express their own opinions about the
                   books they read with you. As you contribute, KidLit gets better and better!   </div>
            </div>
            </div>
            </div>
            )}
            {/* <div className='footer-container'>
                <div className='footer-links'>
                    <a href={'https://www.linkedin.com/in/erin-duffy-omcikus-5641004a/'} target='_blank'><img id='about-icons' src={"blacklinkedin.png"} /></a>
                    <a href={'https://github.com/eomcikus'} target='_blank'><img  id='about-icons' src={'github.png'} /></a>
                </div>
            </div> */}
        </> 
    )
}


export default AllBooks