import { useEffect, useState } from 'react'
import eventService from '../../services/events.service'

function EventDetail(props) {

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

    return(
        <>
       {!isLoading && <div>
            <h1>{event.name}</h1>
            <h1>{event.category}</h1>

        </div>}
        </>
    )
}

export default EventDetail