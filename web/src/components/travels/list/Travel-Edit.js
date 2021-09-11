import { useEffect, useState } from 'react'
import travelService from '../../../services/travel.service'
import { useParams } from 'react-router-dom'


function TravelEdit({title, description, participants, startingDate, endDate, cover, budget}) {

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

    function handleChange(event) {
        const { name, value } = event.target;
        setTravel({
            ...travel,
            [name] : value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        travelService.edit(id, travel)
            .then(travel => travelService.detail(travel.id))  
    }


    return(
        <div className="container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet viverra ante sed imperdiet. Duis interdum mauris lacus, nec ornare diam vehicula nec. Phasellus commodo metus sem, vel consectetur nisi feugiat malesuada. Duis porttitor mi nunc, commodo laoreet ipsum pretium sit amet. Etiam tempor risus in risus dictum, eget fringilla ante porta. Aliquam eget tellus ut risus consectetur tristique. In nec turpis at magna vulputate laoreet vel at nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse iaculis vestibulum tellus ut sollicitudin. Etiam nulla tortor, consequat non risus quis, vestibulum facilisis diam. Proin magna orci, volutpat sit amet risus tempus, cursus ultrices purus. Vestibulum sed enim congue dolor tristique euismod ut at sapien.

Sed nisi tellus, lacinia eget sem vehicula, malesuada feugiat augue. Suspendisse potenti. Nunc id varius sapien. Proin eget diam est. Phasellus a varius erat. Ut ornare, nunc bibendum faucibus tincidunt, tortor tellus tempus lacus, at tempus elit sapien eu purus. Sed elit nunc, tincidunt in metus condimentum, tincidunt dapibus neque. Nullam tempor dui ipsum. Etiam dolor elit, viverra vitae volutpat vel, tristique vitae ex. Vestibulum nunc tellus, lobortis eget luctus at, viverra a justo.</p>
            <form onSubmit={handleSubmit}>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                    <input  name="title" 
                            type="text" 
                            className="form-control"
                            value={travel.title} 
                            onChange={handleChange}
                            placeholder="Your name" 
                            aria-label="Name" 
                            aria-describedby="Add your name"/>
                </div>
              
                <div className="form-floating">
                    <textarea 
                            name="description"
                            className="form-control" 
                            placeholder="Add your travel description" 
                            id="floatingTextarea2"
                            defaultValue={travel.description}>
                               
                    </textarea>
                    <label htmlFor="floatingTextarea2">Description</label>
                </div>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                    <input  name="startingDate" 
                            type="date" 
                            className="form-control"
                            value={travel.startingDate} 
                            onChange={handleChange}
                            placeholder="When does your travel starts?" 
                            aria-label="startingDate" 
                            aria-describedby="When does your travel starts?"/>
                </div>
                
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                    <input  name="endDate" 
                            type="date" 
                            className="form-control"
                            value={travel.endDate}
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
                            placeholder="Add a cover for your travel" 
                            aria-label="Cover" 
                            aria-describedby="Add a cover for your travel"/>
                </div>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                    <input  name="budget" 
                            type="number" 
                            className="form-control"
                            value={travel.budget}
                            placeholder="Do you wanna set an initial budget?" 
                            aria-label="budget" 
                            aria-describedby="Do you wanna set an initial budget?"/>
                </div>

                <button type="submit"> Create a new travel </button>
            </form>

        </div>
    )
}

export default TravelEdit