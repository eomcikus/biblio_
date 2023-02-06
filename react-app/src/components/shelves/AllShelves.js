import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getShelves } from "../../store/shelves";


export const AllShelves = () => {
    let dispatch = useDispatch()
    let shelvesObj = useSelector(state => state.shelves.shelves)
    console.log('obj', shelvesObj)
    let shelves = Object.values(shelvesObj)

    useEffect(() => {
        dispatch(getShelves())
    }, [dispatch])
    return (
        <div>{shelves.map(shelf => <div key={shelf.id}> {shelf.name}</div>)}</div>

        )
}