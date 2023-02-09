import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserShelf } from "../../store/shelves";
import './usershelf.css'
import DeleteBFromShelf from "./DeleteShelf";
export const UserShelf = () => {
    let dispatch = useDispatch()
    // let shelf = useSelector(state => state.shelves.shelves)
    // console.log('shelf', shelf)
    let books1 = useSelector(state => state.shelves.shelves.books)

    useEffect(() => {
        dispatch(getUserShelf())
    }, [dispatch])
    // if (!books1) return null;
    return (
        <>
        <section className='shelf-layout'>
            <div className='shelf-container'>
                {books1 && (
                    <div>{books1.map(book =>
                        <div key={book.id}>
                            <img className='shelf-thumbnail' src={book.thumbnail} />
                            <DeleteBFromShelf bookId={book.bookId} /></div>)}</div>
                )}
                {!books1 && (
                    <div>No books on your bookshelf...yet.</div>
                )}
            </div>
            </section>
        </>
    )
}