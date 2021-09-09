import travelService from "../../services/travel.service";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Budget from "./Travel-Budget";
import Events from "./Events";

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
     {!loading && <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          imperdiet viverra ante sed imperdiet. Duis interdum mauris lacus, nec
          ornare diam vehicula nec.
        </p>
   
        <h1>{travel.title}</h1>
        <h2>{travel.description}</h2>
        <h3>{travel.participants}</h3>

        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"/>
          <label class="btn btn-outline-primary" for="btncheck1">PLANIFICATION</label>

          <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"/>
          <label class="btn btn-outline-primary" for="btncheck2">CALENDAR</label>

          <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"/>
          <label class="btn btn-outline-primary" for="btncheck3">POST</label>

          <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off"/>
          <label class="btn btn-outline-primary" for="btncheck4" onClick={handleBudget}>BUDGET</label>
        </div>
     
        <div>
        <a href="#" name="TravelInsurance" onClick={handleEvents}>travel insurance</a>
        {insurance && 
        <Events {...travel} />
        }
          
        </div>

        <div>      
        {budget && 
        <Budget {...travel} />
        }
        </div>

        <NavLink to={`/my-travels/${travel.id}/events`}>
          <img src="./assets/img/go-voyager" />
          <h3>EVENTOS</h3>
        </NavLink>
      </div>}
      {loading && <div>Loading....</div>}
    </div>
  );
}

export default TravelDetail;
