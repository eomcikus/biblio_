import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { createBook } from '../../store/books';

export const FEBookForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [summary, setSummary] = useState('')
    const [author_about, setAuthor_about] = useState('')
    const [thumbnail, setThumbnail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            title,
            author,
            summary,
            author_about,
            thumbnail
        }
        let createdBook = await dispatch(createBook(payload))
        if (createdBook){
            history.push('/')
        }
    }
    const cancel = () => {
        setTitle('')
        setAuthor('')
        setSummary('')
        setAuthor_about('')
        setThumbnail('')
    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Author"
                    required
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Summary"
                    required
                    value={summary}
                    onChange={e => setSummary(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="About the author"
                    required
                    value={author_about}
                    onChange={e => setAuthor_about(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Cover of Book"
                    required
                    value={thumbnail}
                    onChange={e => setThumbnail(e.target.value)}
                />
                <button
                onSubmit={handleSubmit}>Submit</button>
                <button onSubmit={cancel}>Cancel</button>
            </form>
        </section>
    )
}