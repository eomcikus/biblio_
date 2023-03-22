import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTags } from "../../store/tags";
import { useParams } from "react-router-dom";
import './alltags.css'
const AllTags = ({book_id}) => {
    const dispatch = useDispatch()
    console.log('bookid in alltags',book_id)
    // const { bookId } = useParams()
    const tags = useSelector(state => state.tags)
    const tagsArr = Object.values(tags)
    useEffect(() => {
        dispatch(getTags(book_id))
    }, [dispatch])

    return (
        <div>
            <h3 id="tags-header">Tags</h3>
            {tagsArr.map(tag => <button className='tags-button'>{`${tag}`}</button>)}
            {/* <hr></hr> */}
            
        </div>
    )
}


export default AllTags;