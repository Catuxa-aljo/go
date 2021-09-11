import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import EventNew from "./EventCreate";
import eventServices from '../../services/events.service'

function TravelInsurance(props) {

    function handleDelete(event) {       
        eventServices.remove(event.target.id)
            .then()
    }

    const eventsInsurance = props.events.filter(ev => ev.category == props.searchCategory); 
    return (
        <>
        {console.log(`Category: ${props.searchCategory}`)}
        <div>       
            {eventsInsurance.map(event => <div key={event.id}><NavLink exact to={`/my-travels/events/${event.id}`}> {event.name}</NavLink> <i className="far fa-trash-alt" role="button" onClick={handleDelete}></i></div>)} 
        </div>
        <EventNew category={props.searchCategory}/>
        </>
    )
}

export default TravelInsurance