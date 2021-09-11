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
            {eventsInsurance.map(event => <div>{event.name} <i className="far fa-trash-alt stretched-link" role="button" onClick={handleDelete}></i></div>)} 
        </div>
        <EventNew category={props.searchCategory}/>
        </>
    )
}

export default TravelInsurance