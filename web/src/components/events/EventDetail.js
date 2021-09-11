import { useEffect, useState } from 'react'
import eventService from '../../services/events.service'
import { useHistory } from 'react-router-dom'

function EventDetail(props) {

    const history = useHistory()
    const [event, setEvent] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        const id = props.match?.params?.id;
        eventService.detail(id)
            .then(event => {
                setEvent(event)
                setIsLoading(false)
            })
    }, [])

    function handleDelete(id) { 
        id = props.match?.params?.id
        eventService.remove(id)
            .then(() => history.push('/my-travels') )
    }

    return(
        <>
       {!isLoading && <div>
            <h1>{event.name}</h1>
            <h1>{event.category}</h1>
            <i className="far fa-trash-alt stretched-link" role="button" onClick={handleDelete}></i>
        </div>}
        </>
    )
}

export default EventDetail