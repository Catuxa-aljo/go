import { useEffect, useState } from "react"
import userService from '../../services/user.service'
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


function Home () {
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
        const { name, value } = event.target
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
        <>
        <div className="home" id="home">
            <img src="./assets/img/go-voyager.png" alt="Go. The voyager planner" className="flip-horizontal-bottom" />
            <h1 className="tracking-in-expand">The voyager planner</h1>
            <h2>Had Ulises used Go wouldn't have taken him 20 year get back to Itaca</h2>
            <a href="#register" className="swing-in-top-fwd">DONT'T BE ULISES, start planning your trips</a>
        </div>
        <div className="container">
            <section id="what">
                <div>
                    <h2>What is Go?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere ante ex, non pellentesque massa aliquet gravida. Vestibulum placerat mi tortor, eget imperdiet nulla gravida eu. Integer facilisis nulla nec vehicula tincidunt. Nunc eget ex ullamcorper, dapibus quam a, mattis lectus. Maecenas ultrices tempor iaculis. Etiam vestibulum ut ante sed fermentum. In aliquet nibh ac nibh molestie tempus. Morbi non justo tellus. Phasellus blandit suscipit suscipit.</p>
                    <p>Curabitur posuere eros nec molestie hendrerit. Duis rutrum at mauris vitae rhoncus. Aenean congue, nisl eget fermentum malesuada, tellus tortor mollis est, sit amet sodales dolor erat eu urna. Nulla auctor augue sed magna pretium vehicula. Aenean lacinia, sem quis aliquet varius, orci turpis dapibus lectus, congue tempus ipsum turpis sit amet arcu. Sed aliquet in orci sit amet porttitor. Vestibulum convallis ante sit amet nunc viverra tincidunt.</p>
                </div>
                <div>
                    <img src="./assets/img/go-voyager-2.png" alt="Go. The voyager planner" />
                </div>
            </section>
            <section className="blue">
                <article>
                    <h3>Organize</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </article>
                <article>
                    <h3>Portable</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </article>
                <article>
                    <h3>Inspire</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </article>
            </section>
            <section>
                <a href="#register" >Register today</a>
            </section>
            <section id="what">
                <div>
                    <h2>How does it works?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere ante ex, non pellentesque massa aliquet gravida. Vestibulum placerat mi tortor, eget imperdiet nulla gravida eu. Integer facilisis nulla nec vehicula tincidunt. Nunc eget ex ullamcorper, dapibus quam a, mattis lectus. Maecenas ultrices tempor iaculis. Etiam vestibulum ut ante sed fermentum. In aliquet nibh ac nibh molestie tempus. Morbi non justo tellus. Phasellus blandit suscipit suscipit.</p>
                    <p>Curabitur posuere eros nec molestie hendrerit. Duis rutrum at mauris vitae rhoncus. Aenean congue, nisl eget fermentum malesuada, tellus tortor mollis est, sit amet sodales dolor erat eu urna. Nulla auctor augue sed magna pretium vehicula. Aenean lacinia, sem quis aliquet varius, orci turpis dapibus lectus, congue tempus ipsum turpis sit amet arcu. Sed aliquet in orci sit amet porttitor. Vestibulum convallis ante sit amet nunc viverra tincidunt.</p>
                </div>
                <div>
                    <img src="./assets/img/go-voyager.png" alt="Go. The voyager planner" />
                </div>
            </section>
            <section className="blue">
                <article>
                    <h3>Start your travel</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </article>
                <article>
                    <h3>All your travel at hand!</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </article>
                <article>
                    <h3>Meke a great memory and inspire</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </article>
            </section>
            <section>
                <a href="#register" >Register today</a>
            </section>
            <section id="register">
                <div>
                    <h2>Register and start the journey!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere ante ex, non pellentesque massa aliquet gravida. Vestibulum placerat mi tortor, eget imperdiet nulla gravida eu. Integer facilisis nulla nec vehicula tincidunt. Nunc eget ex ullamcorper, dapibus quam a, mattis lectus. Maecenas ultrices tempor iaculis. Etiam vestibulum ut ante sed fermentum. In aliquet nibh ac nibh molestie tempus. Morbi non justo tellus. Phasellus blandit suscipit suscipit.</p>
                </div>
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
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><i className="far fa-envelope"></i></span>
                        <input  name="email" 
                                type="text" 
                                className="form-control" 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                value={user.email} 
                                placeholder="Your email" 
                                aria-label="Email" 
                                aria-describedby="Add your email"/>
                    </div>
                    <h6>{errors.email}</h6>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><i className="fas fa-unlock-alt"></i></span>
                        <input  name="password" 
                                type="password" 
                                className="form-control" 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                value={user.password} 
                                placeholder="Choose your password" 
                                aria-label="Password"
                                aria-describedby="Choose your password"/>
                    </div>
                    <h6>{errors.password}</h6>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><i className="far fa-image"></i></span>
                        <input  name="avatar" 
                                type="file" 
                                className="form-control" 
                                onChange={handleChange} 
                                value={user.avatar} 
                                placeholder="Add an avatar" 
                                aria-label="Avatar" 
                                aria-describedby="Add an avatar"/>
                    </div>
                    <button type="submit">Register</button>
                
                </form>
            </section>
        </div>
        </>
    )
}

export default Home