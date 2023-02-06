import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getShelves } from "../../store/shelves";


export const AllShelves = () => {
    let dispatch = useDispatch()
    let shelves = useSelector(state => state.shelves)
    console.log(shelves)
    console.log('here')
    useEffect(() => {
        dispatch(getShelves())
    }, [dispatch])
    return (
        <div>{'hi'}</div>
    )
}