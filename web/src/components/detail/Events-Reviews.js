
import { NavLink } from "react-router-dom"
import ReviewCreate from "../Reviews/ReviewCreate"
import '../../index.css';

function EventsReviews({events, user}) {
    return(
        <div>
            EVENTS
            {events.map(event => (
                <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                  <NavLink exact to={`/my-travels/events/${event.id}`}> {event.name} </NavLink>
                  <p className="mb-1">{event.reviews}</p>
                 
                  </div>
                  <span className="badge bg-primary rounded-pill">Add a review<i className="fas fa-star-half-alt"></i></span>
                </li>
              </ul>
            ))}



        </div>
    )
}

export default EventsReviews