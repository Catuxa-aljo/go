import { useContext, useEffect, useState } from "react"
import userService from '../../../services/user.service'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext'

const validations = {
    name: (value) => {
        let message;
        if(!value) {
            message = 'A name is required'
        } 
        return message

    }
}

function EditProfile({name, avatar, password}) {

    const auth = useContext(AuthContext)
    const [user, setUser] = useState({
        name: '',
        avatar: '',
    })

    const [errors, setErrors] = useState({ 
        name: validations.name(''),
    });

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

    function handleSubmit(event) {
        event.preventDefault()
        userService.edit(user)
            .then(user => {
                auth.login(user)
            })

    }

    return(
        <div>
             <form onSubmit={handleSubmit}>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                        <input  name="name" 
                                type="text" 
                                className={`form-control ${touched.name && `${errors.name  ? 'bg-danger is-invalid' : 'is-valid'}`}`} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                                value={user.name} 
                                placeholder="Your name" 
                                aria-label="Name" 
                                aria-describedby="Add your name"/>
                    </div>
                    {touched.name && <h6><i className={errors.name ? "fas fa-exclamation-triangle" : "fas fa-check" }> {errors.name ? errors.name : 'All good!'}</i></h6>}
                    <div className="valid-feedback">{errors.name}</div>
                    <h6>{errors.email}</h6>    
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><i className="far fa-image"></i></span>
                        <input  name="avatar" 
                                type="file" 
                                className="form-control" 
                                onChange={handleChange} 
                                placeholder="Add an avatar" 
                                aria-label="Avatar" 
                                aria-describedby="Add an avatar"/>
                    </div>
                    <button type="submit">Register</button>
                
                </form>

        </div>

    )
}

export default EditProfile