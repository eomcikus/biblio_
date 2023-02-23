import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTags } from "../../store/tags";
import { useParams } from "react-router-dom";


const AllTags = ({book_id}) => {
    const dispatch = useDispatch()
    console.log('bookid in alltags',book_id)
    // const { bookId } = useParams()
    const tags = useSelector(state => state.tags)
    useEffect(() => {
        dispatch(getTags(book_id))
    }, [dispatch])
    console.log('----------------tags', tags)
    return (
        <div></div>
    )
}


export default AllTags;