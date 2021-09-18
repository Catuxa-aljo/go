import userService from '../../../services/user.service'
import { useState, useEffect  } from 'react';
import { useHistory } from 'react-router-dom';

const EMAIL_PATTERN= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validations = {
    name: (value) => {
        let message;
        if(!value) {
            message = 'A name is required'
        } 
        return message
    },
    email: (value) => {
        let message;
        if(!value) {
            message = 'An email is required'
        } else if (value && !EMAIL_PATTERN.test(value)){
            message = 'Please, enter a valid email'
        }
        return message
    },
    password: (value) => {
        let message
        if(!value) {
            message = 'Set your password'
        } else if (value.length < 8) {
            message = 'Your password needs at least 8 characters'
        }
        return message
    }
}

function Register() {
    const history = useHistory()
    const [ user, setUser ] = useState({ 
        name: '',
        email: '',
        password: '',
        avatar: ''
    });

    const [errors, setErrors] = useState({ 
        name: validations.name(''),
        email: validations.email(''),
        password: validations.password(''),
    });

    const [touched, setTouched] = useState({})

    function handleChange(event) {
        let { name, value, files } = event.target

        if ( files ) {
            value = files[0]
        }

        setUser({ ...user,
        [name] : value})
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

    function isFormValid() {        
        return !Object.keys(errors).some(key => errors[key] !== undefined)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(isFormValid()){
        userService.create(user)
            .then(() => history.push('/login'))
            .catch(error  => {
                const { errors, message} = error.response?.data || error;
                const touched =  Object.keys(errors || {}).reduce((touched, key) => {
                    touched[key] = true;
                    return touched;
                }, {});           
                setErrors({...errors,
                        name : errors ? undefined : message,
                        email : errors ? undefined : message,
                        password : errors ? undefined : message,
                })
                setTouched({... touched,
                        name: errors ? false : true,
                        email: errors ? false : true,
                        password: errors ? false : true,
                })
            })}
    }
    return(

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
        
        {touched.name && <h6><i className={errors.name ? "fas fa-exclamation-triangle" : "fas fa-check" }></i> {errors.name ? errors.name : 'All good!'}</h6>}
        
        <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping"><i className="far fa-envelope"></i></span>
            <input  name="email" 
                    type="text" 
                    className={`form-control ${touched.email && `${errors.email  ? 'bg-danger is-invalid' : 'is-valid'}`}`} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    value={user.email} 
                    placeholder="Your email" 
                    aria-label="Email" 
                    aria-describedby="Add your email"/>
        </div>
        {touched.email && <h6><i className={errors.email ? "fas fa-exclamation-triangle" : "fas fa-check" }></i> {errors.email ? errors.email : 'All good!'}</h6>}

        <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping"><i className="fas fa-unlock-alt"></i></span>
            <input  name="password" 
                    type="password" 
                    className={`form-control ${touched.password && `${errors.password  ? 'bg-danger is-invalid' : 'is-valid'}`}`}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    value={user.password} 
                    placeholder="Choose your password" 
                    aria-label="Password"
                    aria-describedby="Choose your password"/>
        </div>
        
        {touched.password && <h6><i className={errors.password ? "fas fa-exclamation-triangle" : "fas fa-check" }></i> {errors.password ? errors.password : 'All good!'}</h6>}

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
        <div className="form-button">
            <button className="btn btn-outline-secondary" type="submit" disabled={!isFormValid()}>Register</button>
        </div>
    
    </form>

    )
}

export default Register