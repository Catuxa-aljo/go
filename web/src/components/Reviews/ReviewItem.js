
import { NavLink } from "react-router-dom"
import ReviewCreate from "./ReviewCreate"
import categories from '../../data/travelEvents.json'


function ReviewItem ({id, category, reviews, name}) {


    return(
        <li className="list-group-item justify-content-between align-items-center reviews">
            <div className="review" style={{ background:`${categories[category].bgcolor}`, color:'#fff' }}>
                {<i className={categories[category].icon}></i>}
            </div>
            <div>      
            <NavLink exact to={`/my-travels/events/${id}`}> {name} </NavLink>
            </div>
            <div className="review-text">
            {/* <ReviewCreate {...event} /> */}            
            {reviews?.map(review => <p key={review.id}>{review.comments}</p>)}
            </div>
            <span className="badge bg-primary rounded-pill">Add a review<i className="fas fa-star-half-alt"></i></span>
    </li>
    )
}

export default ReviewItem