import { useState } from "react"
import eventService from '../../services/events.service'
import travelService from '../../services/travel.service'
import { useHistory, useParams } from 'react-router-dom'

function EventNew(props) {
    const history = useHistory()
    const { id } = useParams()

    const [event, setEvent] = useState({
        name: '',
        description: '',
        url: '',
        category: props.category,
        startDate: '',
        endDate: '',
        time: '',
        price: 0,
        status: false,
   
    });

    const [errors, setErrors] = useState({

    })

    const [touched, setTouched] = useState()

    function handleChange(e) {
        const { name, value } = e.target;
        setEvent({ ...event,
            [name]: value})
    }

    function handleBlur(e) {
        const { name } = e.target;
        setTouched({ ...touched,
            [name]: true})
    }

    function handleSubmit(e) {
        e.preventDefault()

        eventService.create(id, event)
                .then(event => travelService.detail(id))
        
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
            <div className="form-floating">
                <textarea 
                        name="description"
                        className="form-control" 
                        placeholder="Add your travel description" 
                        id="floatingTextarea2"
                        onChange={handleChange}
                        defaultValue={event.description}>
                           
                </textarea>
                <label htmlFor="floatingTextarea2">Description</label>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                <input  name="url" 
                        type="text" 
                        className="form-control"
                        value={event.url} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Add an url" 
                        aria-label="Name" 
                        aria-describedby="Add an url"/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                <input  name="startDate" 
                        type="date" 
                        className="form-control"
                        value={event.startDate} 
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
            <div className="form-check">
                <input  name="status" 
                        className="form-check-input" 
                        type="checkbox" 
                        value={event.status}
                        onChange={handleChange} 
                        id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Status
                </label>
            </div>
            <button type="submit"> Create a new travel </button>
            </form>
        </div>
    )
}

export default EventNew

