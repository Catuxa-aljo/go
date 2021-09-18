import { useEffect, useState } from 'react'
import travelService from '../../../services/travel.service'
import { useParams } from 'react-router-dom'

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
            message = 'Your ending date has to be after your starting date'
        }
        return message
    }
}


function TravelEdit({title, description, participants, startingDate, endDate, cover, budget, onTravelUpdate, onSubmitForm}) {

    const { id } = useParams()

    const [ travel, setTravel ] = useState({
        title: title,
        description: description,
        participants: participants,
        startingDate: startingDate,
        endDate: endDate,
        cover: cover,      
        budget: budget
    })

    const [ touched, setTouched ] = useState()
    const [errors, setErrors] = useState({
        title: validations.title('') ,
        startingDate: validations.startingDate(''),
        endDate: validations.endDate('')
    })

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

    function handleSubmit(e) {
        e.preventDefault()
        travelService.edit(id, travel)
            .then(travel => { 
                    onSubmitForm();
                    onTravelUpdate()} )
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
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="far fa-compass"></i></span>
                    <input  name="title" 
                            type="text" 
                            className="form-control"
                            value={travel.title} 
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="Your name" 
                            aria-label="Name" 
                            aria-describedby="Add your name"/>
                </div>
              
                <div className="form-floating">
                    <textarea 
                            name="description"
                            className="form-control"
                            onBlur={handleBlur}
                            onChange={handleChange} 
                            placeholder="Add your travel description" 
                            id="floatingTextarea2"
                            defaultValue={travel.description}>
                               
                    </textarea>
                    <label htmlFor="floatingTextarea2">Description</label>
                </div>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="far fa-calendar-alt"></i></span>
                    <input  name="startingDate" 
                            type="date" 
                            className="form-control"
                            value={travel.startingDate} 
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="When does your travel starts?" 
                            aria-label="startingDate" 
                            aria-describedby="When does your travel starts?"/>
                </div>
                
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa fa-calendar-alt"></i></span>
                    <input  name="endDate" 
                            type="date" 
                            className="form-control"
                            value={travel.endDate}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="When does your travel ends?" 
                            aria-label="endDate" 
                            aria-describedby="When does your travel ends?"/>
                </div>
               
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="far fa-image"></i></span>
                    <input  name="cover" 
                            type="file" 
                            className="form-control" 
                            onChange={handleChange}
                            placeholder="Add a cover for your travel" 
                            aria-label="Cover" 
                            aria-describedby="Add a cover for your travel"/>
                </div>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-coins"></i></span>
                    <input  name="budget" 
                            type="number" 
                            className="form-control"
                            value={travel.budget}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="Do you wanna set an initial budget?" 
                            aria-label="budget" 
                            aria-describedby="Do you wanna set an initial budget?"/>
                </div>
                <section className="blue">
                <button className="p-3" type="submit"> Update your Travel </button>
                </section>
            </form>

        </div>
    )
}

export default TravelEdit