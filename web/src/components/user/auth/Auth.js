import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext'
import userService from '../../../services/user.service'

const validations = {
    email: (value) => {
        let message;
        if(!value) {
            message= 'Insert your registered email'
        }
        return message
    },
    password: (value) => {
        let message;
        if(!value) {
            message= 'Insert your password'
        }
        return message
    }
}

function Login () {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const [ data, setData ] = useState({
        email: '',
        password: ''
    })

    const [ errors, setErrors ] = useState({
        email: validations.email(''),
        password: validations.password('')
    })

    const [ touched, setTouched ] = useState({})


    function handleChange(event) {
        const { name, value } = event.target
        setData({
            ...data,
            [event.target.name] : event.target.value    
        })

        setErrors({
            ...errors,
            [name] : validations[name] ? validations[name](value) : undefined
        })
    }

    function handleBlur(event) {
        const {name} = event.target;
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

        if ( isFormValid() ) {
        userService.login(data.email, data.password)
            .then(user => {
                auth.login(user);
                history.push('/my-travels')
            })
            .catch(error  => {
                const { errors, message} = error.response?.data || error;
                const touched =  Object.keys(errors || {}).reduce((touched, key) => {
                    touched[key] = true;
                    return touched;
                }, {});           
                setErrors({...errors,
                        email : errors ? undefined : message,
                        password : errors ? undefined : message,
                })
                setTouched({... touched,
                        email: errors ? false : true,
                        password: errors ? false : true,
                })
            })
        }
    }

    return(
        <div className="home">
            <div className="container">
            <h1>Login</h1>
            <h2>The world is big and there's no time to lose. Log now!</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                    <input 
                        name="email" 
                        type="text" 
                        value={data.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${touched.email && `${errors.email  ? 'bg-danger is-invalid' : 'is-valid'}`}`}
                        placeholder="Your name"
                        aria-label="Name" 
                        aria-describedby="Add your name"/>
                </div>
                {touched.email && <h6><i className={errors.email ? "fas fa-exclamation-triangle" : "fas fa-check" }></i> {errors.email ? errors.email : 'All good!'}</h6>}

                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-unlock-alt"></i></span>
                    <input 
                        name="password" 
                        type="password"
                        value={data.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${touched.password && `${errors.password  ? 'bg-danger is-invalid' : 'is-valid'}`}`}
                        placeholder="Password" 
                        aria-label="Password" 
                        aria-describedby="write your password"/>
                </div>
                {touched.password && <h6><i className={errors.password ? "fas fa-exclamation-triangle" : "fas fa-check" }></i> {errors.password ? errors.password : 'All good!'}</h6>}
                <section className="blue">
                <button type="submit" className="btn btn-outline-secondary" disabled={!isFormValid()} >LOGIN</button>
                </section>
            </form>
            </div>
        </div>
    )
}

export default Login