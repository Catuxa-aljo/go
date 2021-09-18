
import { useEffect, useState } from 'react'
import reviewService from '../../services/review.service'
import {useParams} from 'react-router-dom'
import Rating from 'react-rating'

function ReviewCreate({onEventUpdate}) {

    const { id } = useParams()

    const [review, setReview] = useState({

        comments:"",
        
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setReview({
            ...review,
            [name] : value
        })
    }

    function handleSubmit (event) {    

        event.preventDefault()
        reviewService.create(id, review)
            .then(review => onEventUpdate() )
            .catch(error  => {
                const { errors, message} = error.response?.data || error;
                const touched =  Object.keys(errors || {}).reduce((touched, key) => {
                    touched[key] = true;
                    return touched;
                }, {});           
            })
    }

    return(
        <div className="container">
                <h4>Leave a review of this event</h4>
                <form onSubmit={handleSubmit}>
                <div className="form-floating">
                <textarea 
                        name="comments"
                        className="form-control" 
                        placeholder="Add your travel description" 
                        id="floatingTextarea2"
                        onChange={handleChange}
                        defaultValue={review.comments}>
                           
                </textarea>
                <label htmlFor="floatingTextarea2">Review</label>
            </div>
                <button type="submit"> Create a new travel </button>
                </form>

        </div>
    )
}

export default ReviewCreate