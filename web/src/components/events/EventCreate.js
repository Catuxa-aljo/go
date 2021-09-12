import { useState } from "react"
import eventService from '../../services/events.service'
import travelService from '../../services/travel.service'
import { useHistory, useParams } from 'react-router-dom'

const validations = {
    name: (value) => {
        let message
        if (!value) {
            message = 'Please, insert a title'
        }
        return message
    },
    startDate: (value) => {
        let message
        if (!value) {
            message = 'Insert a star Date'
        }
        return message
    },
    endDate: (value) => {
        let message
        if (!value) {
            message = 'Insert an end date'
        }
    }
}

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
        name: validations.name(''),
        startDate: validations.startDate(''),
        endDate: validations.endDate('')
    })

    const [touched, setTouched] = useState()

    function handleChange(e) {
        const { name, value } = e.target;
        setEvent({ ...event,
            [name]: value})
        setErrors({
            ...errors,
            [name] : validations[name] ? validations[name](value) : undefined
        })
    }

    function handleBlur(e) {
        const { name } = e.target;
        setTouched({ ...touched,
            [name]: true})
    }

    function isFormValid() {        
        return !Object.keys(errors).some(key => errors[key] !== undefined)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if ( isFormValid ) {
            eventService.create(id, event)
                .then(event => travelService.detail(id))
                .catch(error  => {
                    const { errors, message} = error.response?.data || error;
                    const touched =  Object.keys(errors || {}).reduce((touched, key) => {
                        touched[key] = true;
                        return touched;
                    }, {});           
                    setErrors({...errors,
                            title : errors ? undefined : message,
                            startingDate : errors ? undefined : message,
                            endDate : errors ? undefined : message,
                    })
                    setTouched({... touched,
                            title: errors ? false : true,
                            startingDate: errors ? false : true,
                            endDate: errors ? false : true,
                    })
                })
            }
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
            <button className="btn btn-outline-secondary" type="submit" disabled={!isFormValid()}> {`New item for ${props.category}`} </button>
            </form>
        </div>
    )
}

export default EventNew

