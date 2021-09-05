import { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext'
import userService from '../../services/user.service'

function Header () {
    const history = useHistory();
    const auth = useContext(AuthContext)

    function handleLogout(){
        userService.logout()
            .then(() => {
                auth.logout();
                history.push('/')
            })
            .catch(error => console.error(error))
    }

    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="./assets/img/go-voyager.png" alt="Go. The voyager planner" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#what">What is go?</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"exact to="/travels">Get inspired</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">My travels</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li> <span className="me-3">{auth.user?.name}</span></li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/logout">Register</NavLink>
                        </li>
                        <li> <button onClick={handleLogout} className="btn btn-danger btn-sm">Logout</button></li>
                    </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header