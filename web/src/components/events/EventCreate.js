import { useState } from "react"
import eventService from '../../services/events.service'
import travelService from '../../services/travel.service'
import { useHistory } from 'react-router-dom'

function EventNew(props) {
    const history = useHistory()

    const [event, setEvent] = useState({
        name: '',
        description: '',
        category: props.category,
        startDate: '',
        endDate: '',
        time: '',
        price: 0,
        status: false,
        location: []
    });

    const [errors, setErrors] = useState({

    })

    const [touched, setTouched] = useState()

    function handleChange(event) {
        const { name, value } = event.target;
        setEvent({ ...event,
            [name]: value})
    }

    function handleBlur(event) {
        const { name } = event.target;
        setTouched({ ...touched,
            [name]: true})
    }

    function handleSubmit(e) {
        e.preventDefault()
        const id = props.match?.params?.id;
        eventService.create(id, event)
                .then(() => history.push('/travels'))
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                <input  name="name" 
                        type="text" 
                        className="form-control"
                        value={event.name} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your event title" 
                        aria-label="Name" 
                        aria-describedby="Your event title"/>
            </div>
            <div class="form-floating">
                <textarea 
                        name="description"
                        class="form-control" 
                        placeholder="Add your travel description" 
                        id="floatingTextarea2">
                            {event.description}
                </textarea>
                <label for="floatingTextarea2">Description</label>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                <input  name="startingDate" 
                        type="date" 
                        className="form-control"
                        value={event.startingDate} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="When does your travel starts?" 
                        aria-label="startingDate" 
                        aria-describedby="When does your travel starts?"/>
            </div>
            
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                <input  name="endDate" 
                        type="date" 
                        className="form-control"
                        value={event.endDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="When does your travel ends?" 
                        aria-label="endDate" 
                        aria-describedby="When does your travel ends?"/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                <input  name="time" 
                        type="time" 
                        className="form-control"
                        value={event.time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="When does your travel ends?" 
                        aria-label="endDate" 
                        aria-describedby="When does your travel ends?"/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                <input  name="price" 
                        type="number" 
                        className="form-control"
                        value={event.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="When does your travel ends?" 
                        aria-label="endDate" 
                        aria-describedby="When does your travel ends?"/>
            </div>
            <div class="form-check">
                <input  name="status" 
                        class="form-check-input" 
                        type="checkbox" value="" 
                        id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    Status
                </label>
            </div>
            <button type="submit"> Create a new travel </button>
            </form>
        </div>
    )
}

export default EventNew

