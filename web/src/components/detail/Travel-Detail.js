import travelService from "../../services/travel.service";
import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Budget from "./Travel-Budget";
import Events from "../events/Events";
import Timeline from "../timeline/TimeLine";
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import NewCalendar from "../calendar/NewCalendar";
import Moment from "react-moment";
import TravelEdit from "../travels/list/Travel-Edit";
import { useParams, useHistory } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'



function TravelDetail(props) {
  const { id } = useParams();
  const history = useHistory();
  const [travel, setTravel] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = useContext(AuthContext)
  const [visible, setVisibility] = useState(true)
  const [formVisibility, setFormVisibility] = useState(false)

  useEffect(() => {
    travelService
      .detail(id)
      .then((data) => {
          setTravel(data)
          setLoading(false)
        })
      .catch((error) => console.error(error));
  }, []);

  function handleDelete() {
    travelService.remove(id)
      .then(() => history.push('/my-travels'))
  }

  function handleEdit() {
    setFormVisibility(true)
    setVisibility(false)
  }

  return (
    <div className="container">
      {!loading &&      
      <div className="travel">       
        <div className="col col-lg-3 travel-resume">
          <img src={travel.cover} alt={travel.name} />
          <h1>{travel.title}</h1>
          <h3><i className="far fa-calendar-alt"></i> From <Moment format="YYYY/MM/DD">{travel.startingDate}</Moment> to <Moment format="YYYY/MM/DD">{travel.endDate}</Moment></h3>
          <h2><i className="far fa-compass"></i> {travel.description}</h2>
          <h3><i className="far fa-user"></i> {travel.participants}</h3>          
          {auth.user.id === travel.user.id && 
            <div className="d-flex">
            <h3><i className="far fa-trash-alt" role="button" onClick={handleDelete} title="delete travel"></i></h3>
            <h3><i class="far fa-edit" role="button" onClick={handleEdit} title="edit travel"></i> </h3>
            </div>
          } 
          {formVisibility && 
          <TravelEdit {...travel} />}       
        </div>

        <div className="col col-lg-8">  
        <div>
        <ul>
          <li><Events events={travel.events} searchCategory='Plane' /></li>
          <li><Events events={travel.events} searchCategory='Bookings' /></li>
          <li><Events events={travel.events} searchCategory='Rentals' /></li>
          <li><Events events={travel.events} searchCategory='Tickets' /></li>
          <li><Events events={travel.events} searchCategory='RestaurantsBookings' /></li>
          <li><Events events={travel.events} searchCategory='Transport' /></li>
          <li><Events events={travel.events} searchCategory='Exchanges' /></li>
          <li><Events events={travel.events} searchCategory='TravelInsurance' /></li>
          <li><Events events={travel.events} searchCategory='Lugage' /></li>
          <li><Events events={travel.events} searchCategory='Others' /></li>
        </ul>     
        
                 
        </div>
        <NewCalendar {...travel} />
        <VerticalTimeline>
        {travel.events.map(event => <Timeline key={event.id} {...event} />)}
        </VerticalTimeline>
     
        <NavLink to={`/my-travels/${travel.id}/events`}>
          <img src="./assets/img/go-voyager" />
          <h3>EVENTOS</h3>
        </NavLink>
      </div>
      <div className="col col-lg-1">
      <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fas fa-piggy-bank"></i> BUDGET</button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel"><i className="fas fa-piggy-bank"></i> BUDGET</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <Budget {...travel} />
        </div>
      </div>
      </div>
      
      </div>
     
      }

      {loading && <div>Loading....</div>}
    </div>
  );
}

export default TravelDetail;
