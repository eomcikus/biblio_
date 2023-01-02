import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { createBook, editBook, getOneBook } from '../../../store/books';
import { useHistory, useParams } from 'react-router-dom'


const EditBook = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { bookId } = useParams()
    const book = useSelector(state => state.books.allBooks)
    console.log(book, 'current book')
    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [summary, setSummary] = useState(book.summary)
    const [author_about, setAuthor_about] = useState(book.author_about)
    const [thumbnail, setThumbnail] = useState(book.thumbnail)

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


    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            id: book.id,
            title,
            author,
            summary,
            author_about,
            thumbnail
        }
        let editedBook;
        editedBook = await dispatch(editBook(payload))
        if (editedBook) {
            history.push('/books')

        }
    }
    return (

        <section className='form-section'>
            <form onSubmit={handleSubmit} className='book-form'>
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