
import { NavLink } from "react-router-dom"
import ReviewCreate from "./ReviewCreate"
import categories from '../../data/travelEvents.json'


function ReviewItem ({id, category, reviews, name}) {


    return(
        <>
       {reviews.length > 0 && <li className="list-group-item reviews">
            <div className="review" style={{ background:`${categories[category].bgcolor}`, color:'#fff' }}>
                {<i className={categories[category].icon}></i>}
            </div>
            <div className="review-text">
                <div>      
                    <NavLink exact to={`/my-travels/events/${id}`}> {name} </NavLink>
                </div>
                <div>      
                    {reviews?.map(review => <blockquote className="review-text" key={review.id}>{review.comments}</blockquote>)}
                </div>
            </div>
    </li>}
    </>
    )
}

export default ReviewItem