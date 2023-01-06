import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { createBook, getBooks } from '../../../store/books';
import './bookform.css'
export const FEBookForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [summary, setSummary] = useState('')
    const [author_about, setAuthor_about] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [validationErrors, setValidationErrors] = useState([])
    const [submit, setSubmit] = useState(false)

    const user = useSelector(state => state.session.user)

    useEffect(() => {
        let errors = []
        if (!title) errors.push('Book must have a title')
        if (title.length < 5) errors.push('Book title must be at least 5 characters long.')
        if (title.length > 2000) errors.push('Book title must be less than 2000 characters long.')
        if (title.includes('  ')) errors.push('Book title must have letter and or number characters and cannot be only spaces.')
        if (!author) errors.push('Book must have an author')
        if (author.length < 5) errors.push('Author name must be at least 5 characters long.')
        if (author.length > 1000) errors.push('Author name must be less than 1000 characters long.')
        if (!summary) errors.push('Book must have a summary that is between 200 and 5000 characters long.')
        if (summary.length < 200) errors.push('Book must have a summary that is at least 200 characters.')
        if (summary.length > 5000) errors.push('Book must have a summary that is less than 5000 characters. Revision is your friend!')
        if (!author_about) errors.push('Please include an about the author section.')
        if (author_about.length < 150) errors.push('Please make sure the about the author section is at least 150 characters.')
        if (author_about.length > 5000) errors.push('Please make sure the about the author section is less than 5000 characters long.')
        if (!thumbnail) errors.push('Please include a picture of the cover of your book!')
        if (!thumbnail.includes('.png') && !thumbnail.includes('.jpg') && !thumbnail.includes('.jpeg')) errors.push('Picture of cover must be in .jpg, .jpeg, or .png format!')
        setValidationErrors(errors)
    }, [title, author, summary, author_about, thumbnail])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            title,
            author,
            summary,
            author_about,
            thumbnail,
            user_id: user.id
        }
        setSubmit(true)
        if (validationErrors.length){
            return
        }
        let createdBook = await dispatch(createBook(payload))
        if (createdBook) {
            await dispatch(getBooks())
            history.push('/books')
            return
        }
    }
    const cancel = async (e) => {
        // e.stopPropogation()
        e.preventDefault()
        setTitle('')
        setAuthor('')
        setSummary('')
        setAuthor_about('')
        setThumbnail('')
    }


    return (
        
        <section className='form-section'>
            {user && (
            <form onSubmit={handleSubmit} className='book-form'>
                {submit && !!validationErrors.length && (
                    <ul className='bookform-errors'>
                    {validationErrors.map((error) => (
                        <li key={error}>{error}</li>))}

                    </ul>
)}
                <input
                    type="text"
                    placeholder="Title"
                    // required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Author"
                    // required
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Summary"
                    // required
                    value={summary}
                    onChange={e => setSummary(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="About the author"
                    // required
                    value={author_about}
                    onChange={e => setAuthor_about(e.target.value)}
                />
                <input
                    type="text"
                    className='badThumb'
                    // placeholder="Cover of Book"
                    // accept='image/png, image/jpeg, image/jpg'
                    // required
                    src={thumbnail}
                    onError={e => e.target.src = "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"}
                    onChange={e => setThumbnail(e.target.value)}
                />
                <button
                    type='submit'
                    onSubmit={handleSubmit}>Submit</button>
                <button type='button'
                onClick={cancel}>Cancel</button>
            </form>
            )}
        </section>
    )
}