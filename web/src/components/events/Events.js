import { useEffect, useState, useContext } from "react";
import { NavLink } from 'react-router-dom'
import EventNew from "./EventCreate";
import eventServices from '../../services/events.service'
import { AuthContext } from '../../contexts/AuthContext'

function TravelInsurance(props) {

    const auth = useContext(AuthContext)  
    const [visible, setVisibility] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [check, setCheck] = useState()

    useEffect(() => {
        setIsLoading(false)
    },[])

    function handleDelete(id, event) {
        id = event.target.id
        eventServices.remove(id)
            .then()
    }

    function handleVisibility() {
        setVisibility(!visible)
    }

    const eventsInsurance = props.events.filter(ev => ev.category == props.searchCategory); 
    return (
        <>
        {!isLoading && 
            <>  
         <ul className="list-group events-list">  
            {eventsInsurance.map(event => 
               <li className={event.status ? "list-group-item item-checked" : "list-group-item"} key={event.id} > <NavLink exact to={`/my-travels/events/${event.id}`}> {event.name}</NavLink>
               {auth?.user?.id === props.user.id &&
               <div>
               <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" checked={event.status}/> | <i className="far fa-trash-alt" role="button" onClick={handleDelete}></i>
               </div>}</li>)
            }
            {auth?.user?.id === props.user.id &&
                <li className="list-group-item add-list" role="button" onClick={handleVisibility}>
                    Add a new item <i className="far fa-plus-square"></i>
                </li>
            }
        </ul> 
        {visible && <EventNew category={props.searchCategory}/>}         
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

export default TravelInsurance