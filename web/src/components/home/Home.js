
import Register from "../user/auth/Register"
import { useContext } from "react"
import { AuthContext } from '../../contexts/AuthContext'
import {Helmet} from "react-helmet";
import img1 from '../../assets/img/what-is-go.png'
import img2 from '../../assets/img/portable.png'
import img3 from '../../assets/img/organize.png'
import img4 from '../../assets/img/budget.png'
import img5 from '../../assets/img/how-it-works.png'


function Home () {  
    const auth = useContext(AuthContext)  
    return(
        <>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Go. The voyager planner </title>
                <meta name="description" content="Start planning your trips in advance and keep a record of them" />
          </Helmet>
        <div className="home" id="home">
            <img src="./assets/img/go-voyager.png" alt="Go. The voyager planner" className="bounce-in-top" />
            <h1 className="tracking-in-expand">The voyager planner</h1>
            <h2>Had Ulises used Go wouldn't have taken him 20 year get back to Itaca</h2>
            <a href="#register" className="tracking-in-expand">DONT'T BE ULISES, start planning your trips</a>
        </div>
        <div className="container">
            <section id="what">
                <div>
                    <h2>What is Go?</h2>
                    <p>Go it's an app for planning trips. Here you can have a record of your next vacations and take advance of it during your travel.</p>
                    <p>Register and add your events: flights, bookings, tickets... all at hand!</p>
                </div>
                <div>
                    <img className="scale-in-center" src={img1} alt="Go. The voyager planner" />
                </div>
            </section>
            <section className="blue">
                <article>
                <img className="scale-in-center" src={img2} alt="Organize"/>
                    <h3>Organize</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </article>
                <article>
                    <img className="scale-in-center" src={img3} alt="Portable"/>
                    <h3>Portable</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </article>
                <article>
                    <img className="scale-in-center" src={img4} alt="Portable"/>
                    <h3>Your expenses at bay </h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </article>
            </section>
            <section className="blue">
                <a href="#register" >Register today</a>
            </section>
            <section id="how">
                <div>
                    <h2>How does it works?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere ante ex, non pellentesque massa aliquet gravida. Vestibulum placerat mi tortor, eget imperdiet nulla gravida eu. Integer facilisis nulla nec vehicula tincidunt. Nunc eget ex ullamcorper, dapibus quam a, mattis lectus. Maecenas ultrices tempor iaculis. Etiam vestibulum ut ante sed fermentum. In aliquet nibh ac nibh molestie tempus. Morbi non justo tellus. Phasellus blandit suscipit suscipit.</p>
                    <p>Curabitur posuere eros nec molestie hendrerit. Duis rutrum at mauris vitae rhoncus. Aenean congue, nisl eget fermentum malesuada, tellus tortor mollis est, sit amet sodales dolor erat eu urna. Nulla auctor augue sed magna pretium vehicula. Aenean lacinia, sem quis aliquet varius, orci turpis dapibus lectus, congue tempus ipsum turpis sit amet arcu. Sed aliquet in orci sit amet porttitor. Vestibulum convallis ante sit amet nunc viverra tincidunt.</p>
                </div>
                <div>
                    <img className="scale-in-center" src={img5} alt="How it works" />
                </div>
            </section>
            <section className="blue">
                <article>
                    <h3 className="numbers">1</h3>
                    <h3>Start your travel</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </article>
                <article>
                    <h3 className="numbers">2</h3>
                    <h3>Your travel at hand!</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </article>
                <article>
                    <h3 className="numbers">3</h3>
                    <h3>Save your impressions!</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </article>
            </section>
            <section className="blue">
                <a href="#register" >Register today</a>
            </section>
           {!auth?.user && <section id="register">
                <div className="login">
                    <h2>Register and start the journey!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere ante ex, non pellentesque massa aliquet gravida. Vestibulum placerat mi tortor, eget imperdiet nulla gravida eu. Integer facilisis nulla nec vehicula tincidunt. Nunc eget ex ullamcorper, dapibus quam a, mattis lectus. Maecenas ultrices tempor iaculis. Etiam vestibulum ut ante sed fermentum. In aliquet nibh ac nibh molestie tempus. Morbi non justo tellus. Phasellus blandit suscipit suscipit.</p>
                </div>
               <Register />
            </section>}
        </div>
        </>
    )
}

export default Home