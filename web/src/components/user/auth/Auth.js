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

    function handleSubmit(event) {
        event.preventDefault()
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

    return(
        <div className="container">
            <h1>Login</h1>
            <p>Lorem fistrum a gramenawer por la gloria de mi madre pupita al ataquerl llevame al sircoo la caidita. Jarl está la cosa muy malar a gramenawer a peich no te digo trigo por no llamarte Rodrigor no puedor diodenoo caballo blanco caballo negroorl apetecan. Apetecan no te digo trigo por no llamarte Rodrigor a peich tiene musho peligro quietooor qué dise usteer amatomaa sexuarl mamaar se calle ustée por la gloria de mi madre. Está la cosa muy malar no puedor jarl hasta luego Lucas no puedor me cago en tus muelas benemeritaar mamaar ese pedazo de a wan quietooor. No puedor no te digo trigo por no llamarte Rodrigor mamaar caballo blanco caballo negroorl pupita fistro la caidita hasta luego Lucas amatomaa. Qué dise usteer sexuarl de la pradera pecador.</p>
            <form onSubmit={handleSubmit}>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                    <input 
                        name="email" 
                        type="text" 
                        value={data.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control" 
                        placeholder="Your name"
                        aria-label="Name" 
                        aria-describedby="Add your name"/>
                    {touched.email && errors.email}
                </div>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                    <input 
                        name="password" 
                        type="password"
                        value={data.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control" 
                        placeholder="Your name" 
                        aria-label="Name" 
                        aria-describedby="Add your name"/>
                </div>
                <button type="submit">LOGIN</button>
            </form>

        </div>
    )
}

export default Login