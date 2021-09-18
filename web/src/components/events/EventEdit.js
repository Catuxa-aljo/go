import { useEffect, useState } from "react";
import eventService from '../../services/events.service'
import { useParams } from 'react-router-dom'

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

function EventEdit ({name, description, url, startDate, endDate, time, price, status, location, onEventUpdate, onSubmitForm}) {

    const { id } = useParams()
    
    const [event, setEvent ] = useState({
        name: name,
        description: description,
        url: url,
        startDate: startDate,
        endDate: endDate,
        time: time,
        price: price,
        status: status,
        location: location
    }) 

    const [checkBox, setCheckBox] = useState(event.status)

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

    function handleCheck() { 
        setCheckBox(!checkBox)              
    }

    function isFormValid() {        
        return !Object.keys(errors).some(key => errors[key] !== undefined)
    }

    function handleSubmit(e) {
        e.preventDefault()
        eventService.edit(id, {...event, status:checkBox})
            .then(event => {
                    onSubmitForm();
                    onEventUpdate()
            }) 
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


    return(
        <div className="event-form scale-in-center">
            <div className="red"><i className="fas fa-times-circle" role="button" onClick={onSubmitForm}></i></div>
            <form onSubmit={handleSubmit}>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><i className="far fa-compass"></i></span>
                <input  name="name" 
                        type="text" 
                        className="form-control"
                        value={event.name} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Insert a name" 
                        aria-label="Name" 
                        aria-describedby="Insert a name"/>
            </div>
            
            {event.category !== 'Lugage' && 
            <>
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
                <span className="input-group-text" id="addon-wrapping"><i className="fas fa-link"></i></span>
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
            <div className="dates">
            <div>
            <h3>From</h3>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><i className="far fa-calendar-alt"></i></span>
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
            </div>
            <div>
                <h3>to</h3>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><i className="fa fa-calendar-alt"></i></span>
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
            </div>
            </div>
            <div className="dates">
                <div>
                <h3>Event Time:</h3>
                <div className="input-group flex-nowrap">
               
                <span className="input-group-text" id="addon-wrapping"><i className="far fa-clock"></i></span>
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
            </div>
            <div>
                <h3>Price</h3>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><i className="fas fa-coins"></i></span>
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
            </div>
            </div>
            </>
            }
            <div className="form-check">
               <label className="form-check-label" htmlFor="flexCheckDefault">
                   <h3>It's this event confirmed?</h3>
                </label> 
                <input  name="status" 
                        className="form-check-input" 
                        type="checkbox" 
                        value={checkBox}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onClick={handleCheck}
                        id="flexCheckDefault"/>
                
            </div> 
            <button className="btn btn-outline-secondary" type="submit" > Update</button>
            </form>
           
        </div>
    )
}

export default EventEdit