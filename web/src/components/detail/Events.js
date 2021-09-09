import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import EventNew from "../events/EventCreate";

function Events({ events }) {

    const eventsInsurance = events.filter(ev => ev.category == 'Rentals'); 
    return (
        <>
        <div>       
            {eventsInsurance.map(event => <div>{event.name}</div>)} 
        </div>
        <EventNew category='TravelInsurance'/>
        </>
    )
}

export default Events