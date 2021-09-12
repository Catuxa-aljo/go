import Events from "../events/Events";
import {useState} from 'react'

function EventResume({events, user}) {

    const [eventVisibility, setEventVisibility ] = useState(false)

    function handleEventVisibility(event) {
        setEventVisibility(!eventVisibility)
      }
    
    return(
        <>
        <h2>1erst STEP: Start Planing your trip!</h2>
        <h3>This is the first step of your travel. Create differents events, check and change its status by fulfilling the needed forms</h3>
        <div className="listed-items">        
          <article className="icons">
            <h3 role="button" onClick={handleEventVisibility}> PLANE TICKETS <i className="fas fa-plane"></i></h3>
              {eventVisibility && <Events events={events} searchCategory='Plane' user={user} />}
          </article>
          <article className="icons">
          <h3 role="button" onClick={handleEventVisibility}> BOOKING ROOMS <i className="fas fa-bed"></i></h3>
            {eventVisibility && <Events events={events} searchCategory='Bookings' user={user} />}
          </article>
          <article className="icons">
          <h3 role="button" onClick={handleEventVisibility}> RENTALS <i className="fas fa-car"></i></h3>
            {eventVisibility && <Events events={events} searchCategory='Rentals' user={user}/>}
          </article>
          <article className="icons">
            <h3> EVENT TICKETS <i className="fas fa-ticket-alt"></i></h3>
            <Events events={events} searchCategory='Tickets' user={user} />
          </article>
          <article className="icons">
            <h3> SIGHTSEEINGS <i className="fas fa-camera"></i></h3>
            <Events events={events} searchCategory='Sightseeings' user={user} />
          </article>
          <article className="icons">
            <h3> RESTAURANTS <i className="fas fa-utensils"></i></h3>
            <Events events={events} searchCategory='RestaurantsBookings' user={user} />
          </article>
          <article className="icons">
            <h3> TRANSPORT <i className="fas fa-subway"></i></h3>
            <Events events={events} searchCategory='Transport' user={user} />
          </article>
          <article className="icons">
            <h3> EXCHANGES <i className="fas fa-sync"></i></h3>
            <Events events={events} searchCategory='Exchanges' user={user} />
          </article>
          <article className="icons">
            <h3> TRAVEL INSURANCE <i className="fas fa-hand-holding-medical"></i></h3>
            <Events events={events} searchCategory='TravelInsurance' user={user} />
          </article>
          <article className="icons">
            <h3> LUGAGE <i className="fas fa-suitcase"></i></h3>
            <Events events={events} searchCategory='Lugage' user={user} />
          </article>
          <article className="icons">
            <h3> OTHER <i className="far fa-bookmark"></i></h3>
            <Events events={events} searchCategory='Others' user={user} />
          </article>
        </div>
        </>
    )
}

export default EventResume