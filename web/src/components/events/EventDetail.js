import { useEffect, useState, useCallback } from 'react'
import eventService from '../../services/events.service'
import { NavLink, useHistory, useParams } from 'react-router-dom'
import EventEdit from './EventEdit'
import categories from '../../data/travelEvents.json'
import ReviewCreate from '../Reviews/ReviewCreate'

function EventDetail(props) {

    const history = useHistory()
    const [event, setEvent] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)

    const [ visibility, handleVisibility ] = useState(false)
    const visibilityForm = useCallback(() => handleVisibility(!visibility), [visibility])

    const [fetch, handleFetch] = useState(false);
    const fetchEvent = useCallback(() => handleFetch(!fetch), [fetch])

    useEffect(() => {
        let isMounted = true;
        const id = props.match?.params?.id;
        eventService.detail(id)
            .then(event => {
                if (isMounted) {
                setEvent(event)
                setIsLoading(false)
            }
            })
            .catch((error) => console.error(error));
        return () => isMounted = false
    }, [fetch, visibility])

    function handleCheck() {
        setEvent({
            ...event,
            status : !event.status
        })
    }

    function handleDelete(id) { 
        eventService.remove(id)
            .then(() => history.push(`/my-travels/${event.travel.id}`) )
    }


    return(
        <>
       {!isLoading && 

       <div className="container">  
       <NavLink exact to={`/my-travels/${event.travel.id}`}><button>Return to travel</button> </NavLink> 
            <div className="event-detail">      
                <div className="time-detail">
                    <h3><i className={categories[event.category].icon}></i> </h3>
                    <h2><i className="far fa-calendar-alt"></i>{event.startDate ? `${event.startDate}` : "--" }</h2>
                    <h2><i className="fa fa-calendar-alt"></i>{event.endDate ? `${event.endDate}` : "--"}</h2>
                    <h3><i className="fas fa-clock"></i>{event.time ? `${event.time}` : "-- : --"}</h3>
                </div>
                <div>
                    <h3>{event.category}</h3>
                    <h1>{event.name}</h1>                    
                    <a href={event.url}><i className="fas fa-external-link-alt"></i> {event.url}</a>
                    <p>{event.description}</p>   
                    {event.reviews.map(review => <h3>{review.comments}</h3>)}
                </div>
                <div className="event-resume">      
                    <h3>Status: {event.status ? <i className="far fa-calendar-check"></i> : <i className="far fa-calendar"></i>} </h3>    
                    <h3>Cost: {event.price}</h3>
                    <i className="fas fa-edit" role="button" onClick={handleVisibility} ></i>
                    <i className="far fa-trash-alt" role="button" onClick={ () => handleDelete(event.id) } ></i>     
                </div>
            </div> 
            <div>
                <ReviewCreate />
            </div>
                 
          {visibility && <EventEdit {...event} onEventUpdate={fetchEvent} onSubmitForm={visibilityForm}/>}
        </div>}
        {isLoading && 
            <div className="loading">
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        }
        </>
    )
}

export default EventDetail