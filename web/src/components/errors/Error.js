import '../../index.css';
import imgLogin from '../../assets/img/login.png'
import imgLost from '../../assets/img/lost.png'
import { NavLink } from 'react-router-dom';

function Error() {
    return (
        <div className="container">
            {window.location.pathname === '/404' && 
            <>
            <section className="errors">
            <div>
                    <img src={imgLost} alt="login"/>
                </div>
                <div>
                <h1>ERROR 404</h1>
                <h2>Well, even us get lost sometimes</h2>
                <h3>Why don't start again?</h3>
                <NavLink exact to="/" className="p-3"> Start over </NavLink>
                </div>
            </section>
            </>
            }
            {window.location.pathname === '/403' && 
            <>
            <section className="errors">
                <div>
                    <img src={imgLogin} alt="login"/>
                </div>
                <div>
                <h1>ERROR 403 Forbidden</h1>
                <h2>Ahoy, Pirats aboard!</h2>
                <h3>You must be logged to see this content</h3>
               <NavLink exact to="/login" className="p-3"> Login </NavLink>
               </div>
               </section>
            
            
            </>
            }
        </div>
    )
}

export default Error