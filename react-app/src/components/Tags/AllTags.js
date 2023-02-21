import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTags } from "../../store/tags";
import { useParams } from "react-router-dom";


const AllTags = () => {
    const dispatch = useDispatch()
    const { bookId } = useParams()
    const tags = useSelector(state => state.tags)
    useEffect(() => {
        dispatch(getTags(bookId))
    })
    console.log('----------------tags', tags)
    return (
        <div></div>
    )
}


export default AllTags;