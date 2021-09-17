import { useCallback, useEffect, useState } from "react"
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
}

function EventNew(props) {
    
    const history = useHistory()
    const { id } = useParams()
    const [checkBox, setCheckBox] = useState(false)
    const [event, setEvent] = useState({
        name: '',
        description: '',
        url: '',
        category: props.category,
        startDate: '',
        endDate: '',
        time: '',
        price: 0,
        
    });

    useState(() => {
        setEvent({
            ...event,
            status: checkBox
        })
    }, [])


    const [errors, setErrors] = useState({
        name: validations.name(''),
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

    function handleCheck(e) {
        console.log(e.target.value)        
        setCheckBox(!checkBox)        
    }

    function isFormValid() {        
        return !Object.keys(errors).some(key => errors[key] !== undefined)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if ( isFormValid ) {
            eventService.create(id, event)
                .then(event => {props.onEventUpdate();
                                props.onFormSubmit()})
                .catch(error  => {
                    const { errors, message} = error.response?.data || error;
                    const touched =  Object.keys(errors || {}).reduce((touched, key) => {
                        touched[key] = true;
                        return touched;
                    }, {});           
                    setErrors({...errors,
                            title : errors ? undefined : message,
                    })
                    setTouched({... touched,
                            title: errors ? false : true,
                    })
                })
            }
    }

    return(
        <div className="event-form">
            <div className="red"><i className="fas fa-times-circle" role="button" onClick={props.onFormSubmit}></i></div>
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
            <div className="dates">
            <div className="input-group flex-nowrap">
               <h3>Event Time:</h3>
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
            <div className="input-group flex-nowrap">
                <h3>Price</h3>
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
            </>
            }
            {/* It's confirmed?
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option name="status" onChange={handleChange} value={false}>No</option>
                <option name="status" onChange={handleChange} value={true}>Yes</option>
            </select> */}
            <div className="form-check">
                <input  name="status" 
                        className="form-check-input" 
                        type="checkbox" 
                        value={checkBox}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onClick={handleCheck}
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

