import { useDispatch, useSelector } from "react-redux"
import { presenceActionAddPerson } from "../../store/actions/presence.action";
import { itemActionAdd } from "../../store/slices/item.slice";

export function PersonPresenceRead(){

    const people = useSelector(state => state.presence.people);

    return (
        <ul>
            {people.map(person => (
                <li>{person.firstname} {person.lastname} {person.isPresent ? "V" : "X"}</li>
            ))}
        </ul>
    )
}

export function PersonPresenceEvent(){
    const dispatch = useDispatch()
    const handleAddZaza = () => {
        const zaza = { firstname: 'Zaza', lastname: 'Vanderquack'};
        dispatch(presenceActionAddPerson(zaza))
    }
    const handleAddDella = () => {
        dispatch(presenceActionAddPerson({ firstname: 'Della', lastname: 'Duck'}))
        dispatch(itemActionAdd({ name: 'Della', price: 5}))
    }
    return (
        <>
            <button onClick={handleAddZaza}>Ajouter Zaza</button>
            <button onClick={handleAddDella}>Ajouter Della</button>
        </>
    )
}

export function PersonPresence() {

    return (
        <>
        <PersonPresenceRead />
        <PersonPresenceEvent />
        </>
    )
};