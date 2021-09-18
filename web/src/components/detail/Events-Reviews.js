
import { NavLink } from "react-router-dom"
import ReviewCreate from "../Reviews/ReviewCreate"
import reviewService from '../../services/review.service'
import '../../index.css';
import ReviewItem from "../Reviews/ReviewItem";

function EventsReviews({events, user}) {

    return(
        <div>
            EVENTS
            <ul className="list-group">
            {events.map(event => 
            <ReviewItem {...event} />)}
            </ul>
          </div>   
    )     
}

export default EventsReviews