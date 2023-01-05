import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { createBook, editBook, getOneBook } from '../../../store/books';
import { useHistory, useParams } from 'react-router-dom'


const EditBook = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { bookId } = useParams()
    const book = useSelector(state => state.books.oneBook)
    console.log('book', book)
    const user = useSelector(state => state.session.user)
    // console.log(book, 'current book')
    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [summary, setSummary] = useState(book.summary)
    const [author_about, setAuthor_about] = useState(book.author_about)
    const [thumbnail, setThumbnail] = useState(book.thumbnail)
    const [validationErrors, setValidationErrors] = useState([])
    const [submit, setSubmit] = useState(false)
    useEffect(() => {
        dispatch(getOneBook(bookId))
    }, [dispatch, bookId])


    useEffect(() => {
        setTitle(book.title)
        setAuthor(book.author)
        setSummary(book.summary)
        setAuthor_about(book.author_about)
        setThumbnail(book.thumbnail)
    }, [book])

    useEffect(() => {
        let errors = []
        if (!title) errors.push('Book must have a title')
        if (title?.length < 5) errors.push('Book title must be at least 5 characters long.')
        if (title?.length > 2000) errors.push('Book title must be less than 2000 characters long.')
        if (title?.includes('  ')) errors.push('Book title must have letter and or number characters and cannot be only spaces.')
        if (!author) errors.push('Book must have an author')
        if (author?.length < 5) errors.push('Author name must be at least 5 characters long.')
        if (author?.length > 1000) errors.push('Author name must be less than 1000 characters long.')
        if (!summary) errors.push('Book must have a summary that is between 200 and 5000 characters long.')
        if (summary?.length < 200) errors.push('Book must have a summary that is at least 200 characters.')
        if (summary?.length > 5000) errors.push('Book must have a summary that is less than 5000 characters. Revision is your friend!')
        if (!author_about) errors.push('Please include an about the author section.')
        if (author_about?.length < 150) errors.push('Please make sure the about the author section is at least 150 characters.')
        if (author_about?.length > 5000) errors.push('Please make sure the about the author section is less than 5000 characters long.')
        if (!thumbnail) errors.push('Please include a picture of the cover of your book!')
        if (!thumbnail?.includes('.png') && !thumbnail?.includes('.jpg') && !thumbnail?.includes('.jpeg')) errors.push('Picture of cover must be in .jpg, .jpeg, or .png format!')
        if (!thumbnail?.includes('http://') && !thumbnail?.includes('https://')) errors.push('Please include "http://" or "https://" at the beginning of your photo URL')
        setValidationErrors(errors)
    }, [title, author, summary, author_about, thumbnail])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            id: book.id,
            title,
            author,
            summary,
            author_about,
            thumbnail,
            user_id: user.id
        }
        let editedBook;
        setSubmit(true)
        if (validationErrors.length){
            window.alert('Cannot submit edits. Please check the handy error messages to make your changes!')
        } else {
        (editedBook) = await dispatch(editBook(payload, bookId))
        await dispatch(getOneBook(bookId))
        history.push(`/books/${bookId}`)
        }
    }
   
    return (

        <section className='form-section'>
            <form onSubmit={handleSubmit} className='book-form'>
                {submit && !!validationErrors.length && (
                    <ul className='errors'>
                        {validationErrors.map((error) => (
                            <li key={error}>{error}</li>))}

                    </ul>
                )}
                <input
                    type="text"
                    // placeholder="Title"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    // placeholder="Author"
                    required
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                />
                <input
                    type="text"
                    // placeholder="Summary"
                    required
                    value={summary}
                    onChange={e => setSummary(e.target.value)}
                />
                <input
                    type="text"
                    // placeholder="About the author"
                    required
                    value={author_about}
                    onChange={e => setAuthor_about(e.target.value)}
                />
                <input
                    type="text"
                    // placeholder="Cover of Book"
                    required
                    value={thumbnail}
                    onChange={e => setThumbnail(e.target.value)}
                />
                <button
                    type='submit'
                    onSubmit={handleSubmit}>Submit Changes</button>
                {/* <button type='button'
                onSubmit={cancel}>Cancel</button>  */}
            </form>
        </section>
    )
}

export default EditBook;