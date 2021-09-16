import { useState } from "react";
import travelService from '../../../services/travel.service'
import { useHistory, useParams } from 'react-router-dom'

const validations = {
    title: (value) => {
        let message;
        if(!value) {
            message = 'Your travel needs a title'
        }
        return message
    },
    startingDate: (value) => {
        let message;
        if(!value) {
            message = 'Please insert a start date for your travel'
        }
        return message
    },
    endDate: (value) => {
        let message;
        if(!value) {
            message = 'Please insert an ending date for your trip'
        } 
         else if(value < validations.startingDate.value ) {
            message = 'Your ending date has to be set after your starting date'
        }
        return message
    }
}

function TravelNew({ onTravelUpdate }) {
    const history = useHistory()
    const id = useParams()

    const [ travel, setTravel ] = useState({
        title: '',        
        description:'',
        participants: 1,
        startingDate:'',
        endDate: '',
        cover:'',        
        budget: 0
    })

    const [errors, setErrors] = useState({
        title: validations.title('') ,
        startingDate: validations.startingDate(''),
        endDate: validations.endDate('')
    })

    const [touched, setTouched] = useState({})

    function handleChange (event) {
        let { name, value, files } = event.target;

        if ( files ) {
            value = files[0]
        }

        setTravel({
            ...travel,
            [name]: value
        })
        setErrors({
            ...errors,
            [name] : validations[name] ? validations[name](value) : undefined
        })
    }

    function handleBlur(event) {
        const { name } = event.target
        setTouched({
            ...touched,
            [name]: true
        })
    }

    function handleSubmit (event) {
        event.preventDefault()
        travelService.create(travel)
            .then(travel => {
                history.push(`/my-travels/${travel.id}`)} 
                )
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
        <div className="container form-modal">
            <div className="red"><i className="fas fa-times-circle" role="button" onClick={onTravelUpdate}></i></div>
            <h1>Add a new travel </h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="far fa-compass"></i></span>
                    <input  name="title" 
                            type="text" 
                            className="form-control"
                            value={travel.title} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Travel name" 
                            aria-label="Name" 
                            aria-describedby="Add Travel name"/>
                </div>
                {touched.title && <div>{errors.title}</div>}
                <div className="form-floating">
                    <textarea 
                            name="description"
                            value={travel.description} 
                            onChange={handleChange}
                            className="form-control" 
                            placeholder="Add your travel description" 
                            id="floatingTextarea2"
                            >
                              
                    </textarea>
                    <label htmlFor="floatingTextarea2">Description</label>
                </div>
                <div>
                    <h3>Upload a cover for your travel</h3>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><i className="far fa-image"></i></span>
                        <input  name="cover" 
                                type="file" 
                                onChange={handleChange}
                                className="form-control" 
                                placeholder="Add a cover for your travel" 
                                aria-label="Cover" 
                                aria-describedby="Add a cover for your travel"/>
                    </div>
                </div>
                <div className="dates">
                <div>
                    <h3>Start Date</h3>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><i className="far fa-calendar-alt"></i></span>
                        <input  name="startingDate" 
                                type="date" 
                                className="form-control"
                                value={travel.startingDate} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="When does your travel starts?" 
                                aria-label="startingDate" 
                                aria-describedby="When does your travel starts?"/>
                    </div>
                {touched.startingDate && <div>{errors.startingDate}</div>}
                </div>
                <div>
                    <h3>End Date</h3>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><i className="fas fa-calendar-alt"></i></span>
                        <input  name="endDate" 
                                type="date" 
                                className="form-control"
                                value={travel.endDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="When does your travel ends?" 
                                aria-label="endDate" 
                                aria-describedby="When does your travel ends?"/>
                    </div>
                    {touched.endDate && <div>{errors.endDate}</div>}
                </div>
                </div>
                <div className="dates">
                    <div>
                        <h3>Do you wanna set an initial budget?</h3>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping"><i className="fas fa-coins"></i></span>
                            <input  name="budget" 
                                    type="number" 
                                    className="form-control"
                                    value={travel.budget}
                                    onChange={handleChange}
                                    placeholder="Do you wanna set an initial budget?" 
                                    aria-label="budget" 
                                    aria-describedby="Do you wanna set an initial budget?"/>
                        </div>
                    </div>
                    <div>
                    <h3>Number of participants</h3>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><i className="fas fa-users"></i></span>
                        <input  name="participants" 
                                type="number" 
                                className="form-control"
                                value={travel.participants}
                                onChange={handleChange}
                                placeholder="Number of participants" 
                                aria-label="budget" 
                                aria-describedby="Number of participants"/>
                    </div>
                </div>
                </div>
                

                <button type="submit"> Create a new travel </button>
            </form>

        </div>
    )

}

export default TravelNew