import { useEffect, useState, useContext, useCallback } from "react";
import { NavLink } from 'react-router-dom'
import EventNew from "./EventCreate";
import eventServices from '../../services/events.service'
import { AuthContext } from '../../contexts/AuthContext'
import eventService from '../../services/events.service'

function Events(props) {

    const auth = useContext(AuthContext)  
    const [isLoading, setIsLoading] = useState(true)      
    const [ visibility, handleVisibility ] = useState(false)
    const [ checking, handleChecking ] = useState(false)
    const visibilityForm = useCallback(() => handleVisibility(!visibility), [visibility])
    

    useEffect(() => {
        setIsLoading(false);
    }, [visibility])

    const [status, setValue] = useState(props.status)

    function handleChange(e) {
        const {name, value} = e.target;
        setValue({ [name]: value })
    }
    
    function handleDelete(id) {
        eventServices.remove(id)
            .then( () => props.onEventUpdate() )
            .catch(error => console.error(error))
    }

    function handleCheckEvent(id, event) {        
        eventService.edit(id, {...event, status: !status})
                .then(event =>{
                    setValue(!status)
                    props.onEventUpdate()                    
                })
                .catch(error => console.error(error))
    }
   
    const eventsInsurance = props.events.filter(ev => ev.category == props.searchCategory); 
    return (
        <>
        {!isLoading && 
            <>  
         <ul className="list-group events-list scale-in-center">  
            {eventsInsurance.map(event => 
               <li className={event.status ? "list-group-item item-checked" : "list-group-item"} key={event.id} >
                   <NavLink exact to={`/my-travels/events/${event.id}`}> {event.name}</NavLink>
                    {auth?.user?.id === props.user.id &&
                    <div>
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value={status} 
                            id="defaultCheck1" 
                            onChange={handleChange}
                            onClick={ () => handleCheckEvent(event.id, event)}
                            defaultChecked={event.status}
                        />  
                        | <i className="far fa-trash-alt" 
                        role="button" 
                        onClick={ () => handleDelete(event.id) }></i>
                    </div>}
                </li>
            )}
            {auth?.user?.id === props.user.id &&
                <li className="list-group-item add-list" role="button" onClick={handleVisibility}>
                    Add a new item <i className="far fa-plus-square"></i>
                </li>
            }
        </ul> 
        {visibility && <EventNew category={props.searchCategory} onEventUpdate={props.onEventUpdate} onFormSubmit={visibilityForm} />}         
        </>
    }
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

export default Events