import travelService from "../../services/travel.service";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Budget from "./Travel-Budget";
import Events from "../events/Events";
import Timeline from "../timeline/TimeLine";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import NewCalendar from "../calendar/NewCalendar";
import Moment from "react-moment";
import TravelEdit from "../travels/list/Travel-Edit";
import { useParams, useHistory } from 'react-router-dom'



function TravelDetail(props) {
  const { id } = useParams();
  const history = useHistory();

  const [travel, setTravel] = useState(null);
  const [loading, setLoading] = useState(true);
  


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

  return (
    <div className="container">
      {!loading &&      
      <div className="row">
        <div className="col col-lg-3">
          <img src={travel.cover} alt={travel.name} />
          <h1>{travel.title}</h1>
          <h3>From <Moment format="YYYY/MM/DD">{travel.startingDate}</Moment> to <Moment format="YYYY/MM/DD">{travel.endDate}</Moment></h3>
          <h2>{travel.description}</h2>
          <h3>{travel.participants}</h3>
          <h3><i className="far fa-trash-alt" role="button" onClick={handleDelete}></i></h3>
        </div>

        <div className="col col-lg-8">  
        <div>
        <a href="#" name="TravelInsurance">travel insurance</a>
        
        <Events events={travel.events} searchCategory='TravelInsurance' />
                 
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
      <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">BUDGET</button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">BUDGET</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <Budget {...travel} />
        </div>
      </div>
      </div>
      <TravelEdit {...travel} />
      </div>
     
      }

      {loading && <div>Loading....</div>}
    </div>
  );
}

export default TravelDetail;
