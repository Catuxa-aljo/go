import { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext'
import userService from '../../../services/user.service'


function Login () {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const [ data, setData ] = useState({
        email: '',
        password: ''
    })

    const [ error, setError ] = useState()

    function handleChange(event) {
        const { name, value } = event.target
        setData({
            ...data,
            [event.target.name] : event.target.value
            
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        userService.login(data.email, data.password)
            .then(user => {
                auth.login(user);
                history.push('/my-travels')
            })
            .catch(() => {
                setError('incorrect login')
            })
    }

    return(
        <div>
            <h1>Login</h1>
            <p>Lorem fistrum a gramenawer por la gloria de mi madre pupita al ataquerl llevame al sircoo la caidita. Jarl está la cosa muy malar a gramenawer a peich no te digo trigo por no llamarte Rodrigor no puedor diodenoo caballo blanco caballo negroorl apetecan. Apetecan no te digo trigo por no llamarte Rodrigor a peich tiene musho peligro quietooor qué dise usteer amatomaa sexuarl mamaar se calle ustée por la gloria de mi madre. Está la cosa muy malar no puedor jarl hasta luego Lucas no puedor me cago en tus muelas benemeritaar mamaar ese pedazo de a wan quietooor. No puedor no te digo trigo por no llamarte Rodrigor mamaar caballo blanco caballo negroorl pupita fistro la caidita hasta luego Lucas amatomaa. Qué dise usteer sexuarl de la pradera pecador.</p>
            <form onSubmit={handleSubmit}>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i class="far fa-user"></i></span>
                    <input 
                        name="email" 
                        type="text" 
                        value={data.email}
                        onChange={handleChange}
                        className="form-control" 
                        placeholder="Your name"
                        aria-label="Name" 
                        aria-describedby="Add your name"/>
                </div>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i class="far fa-user"></i></span>
                    <input 
                        name="password" 
                        type="password"
                        value={data.password}
                        onChange={handleChange}
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