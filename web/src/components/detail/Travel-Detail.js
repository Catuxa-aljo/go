import travelService from "../../services/travel.service";
import { useEffect, useState, useContext, useCallback } from "react";
import Budget from "./Travel-Budget";
import Timeline from "../timeline/TimeLine";
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import Moment from "react-moment";
import TravelEdit from "../travels/list/Travel-Edit";
import { useParams, useHistory } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import EventResume from "./Events-Resume";
import Map from "../calendar/Calendar";
import EventsReviews from "./Events-Reviews";
import '../../index.css';
//import App from "../map/Map";


function TravelDetail(props) {
  const { id } = useParams();
  const history = useHistory();
  const [travel, setTravel] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = useContext(AuthContext)
  const [visible, setVisibility] = useState(true)
  const [formVisibility, setFormVisibility] = useState(false)

  const [fetch, handleFetch] = useState(false);
  const fetchTravels = useCallback(() => handleFetch(!fetch), [fetch])


  useEffect(() => {
    let isMounted = true;
    travelService
      .detail(id)
      .then((data) => {
        if (isMounted) {
          setTravel(data)
          setLoading(false)
        }
        })
      .catch((error) => console.error(error));
      return () => isMounted = false

  }, [fetch]);



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
          <div>
            <h1>{travel.title}</h1>
            <h3><i className="far fa-calendar-alt"></i> From <Moment format="YYYY/MM/DD">{travel.startingDate}</Moment> to <Moment format="YYYY/MM/DD">{travel.endDate}</Moment></h3>
            <h2><i className="far fa-compass"></i> {travel.description}</h2>
            <h3><i className="far fa-user"></i> {travel.participants}</h3>          
            {auth?.user?.id === travel.user.id && 
              <div className="d-flex">
                <h3><i className="far fa-trash-alt" role="button" onClick={handleDelete} title="delete travel"></i></h3>
                <h3><i className="far fa-edit" role="button" onClick={handleEdit} title="edit travel"></i> </h3>
              </div>
            } 
            {formVisibility && 
            <TravelEdit {...travel} upDate={setTravel} setFormVisibility={setFormVisibility} upDate={fetchTravels} />
            }
          </div>      
        </div>

              <div className="col col-lg-8"> 
              <div className="numbers">
                <a href="#slide-1">1</a>
                <h2> &gt; </h2>
                <a href="#slide-2">2</a>
                <h2> &gt; </h2>
                <a href="#slide-3">3</a>
              </div>
              <div className="slides">
                <div id="slide-1">
                <EventResume {...travel } onEventUpdate={fetchTravels} />
                </div>
                <div id="slide-2">
                <Map events={travel.events} />
                <VerticalTimeline>
                {travel.events.sort((a, b) => a.startDate.localeCompare(b.startDate)).map(event => <Timeline key={event.id} {...event} />)}
                </VerticalTimeline>
                </div>
                <div id="slide-3">
                <EventsReviews { ...travel} />
                </div>
              </div>
            
        
        
        
    
      </div>
      <div className="col col-lg-1">
      <button className="budget btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fas fa-piggy-bank"></i> BUDGET</button>
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

      {loading && 
        <div className="loading">
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
      }
    </div>
  );
}

export default TravelDetail;
