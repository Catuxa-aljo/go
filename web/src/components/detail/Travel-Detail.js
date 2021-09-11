import travelService from "../../services/travel.service";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Budget from "./Travel-Budget";
import Events from "../events/Events";
import Timeline from "../timeline/TimeLine";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import NewCalendar from "../calendar/NewCalendar";
import Moment from "react-moment";


function TravelDetail(props) {
  const [travel, setTravel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [insurance, setEvents] = useState(false)
  const [budget, setBudget] = useState(false)

  useEffect(() => {
    const id = props.match?.params?.id;
    travelService
      .detail(id)
      .then((data) => {
          setTravel(data)
          setLoading(false)
        })
      .catch((error) => console.error(error));
  }, []);

  function handleEvents() {    
    setEvents(true)   
  }

  function handleBudget() {
    setBudget(true)
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
        </div>

        <div className="col col-lg-8">  
        <NewCalendar {...travel} />
        <VerticalTimeline>
        {travel.events.map(event => <Timeline {...event} />)}
        </VerticalTimeline>

        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"/>
          <label class="btn btn-outline-primary" for="btncheck1">PLANIFICATION</label>

          <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"/>
          <label class="btn btn-outline-primary" for="btncheck2">CALENDAR</label>

          <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"/>
          <label class="btn btn-outline-primary" for="btncheck3">POST</label>
        </div>
     
        <div>
        <a href="#" name="TravelInsurance" onClick={handleEvents}>travel insurance</a>
        {insurance && 
        <Events events={travel.events} searchCategory='TravelInsurance' />
        }
          
        </div>

        

        <NavLink to={`/my-travels/${travel.id}/events`}>
          <img src="./assets/img/go-voyager" />
          <h3>EVENTOS</h3>
        </NavLink>
      </div>
      <div className="col col-lg-1">
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">BUDGET</button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">BUDGET</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
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
