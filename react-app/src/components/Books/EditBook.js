import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { createBook } from '../../store/books';
import { useParams } from 'react-router-dom'


const EditBook = () => {
    const dispatch = useDispatch()
    const { bookId } = useParams()
    const currentBook = useSelector(state => state.books.currentBook)
    const [title, setTitle] = useState(currentBook.title)
    const [author, setAuthor] = useState(currentBook.author)
    const [summary, setSummary] = useState(currentBook.summary)
    const [author_about, setAuthor_about] = useState(currentBook.author_about)
    const [thumbnail, setThumbnail] = useState(currentBook.thumbnail)

    const handleSubmit = () => {
        const payload = {
            id: currentBook.id,
            title, 
            author,
            summary, 
            author_about,
            thumbnail
        }
        let editedBook;
        editedBook = dispatch(createBook(payload))
        if (editedBook){
            // history.push('/books')
            console.log('it worked homie')
        }
    }
    return (
     
            <section className='form-section'>
            <form onSubmit={handleSubmit} className='book-form'>
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
                    type='submit'
                    onSubmit={handleSubmit}>Submit</button>
                {/* <button type='button'
                onSubmit={cancel}>Cancel</button> */}
        </form>
        </section>
    )
}

export default EditBook;