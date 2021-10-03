import Events from "../events/Events";
import {useState} from 'react'
import data from '../../data/travelEvents.json'
import '../../index.css';

function EventResume({events, user, onEventUpdate}) {

    const [eventVisibility, setEventVisibility ] = useState(false)

    function handleEventVisibility(event) {
        setEventVisibility(!eventVisibility)
      }
    
    return(
        <>
        <h2>1erst STEP: Start Planing your trip!</h2>
        <h3>This is the first step of your travel. Create differents events, check and change its status by fulfilling the needed forms</h3>
        <div className="listed-items">

          <div className="accordion accordion-flush" id="plane">
            <div className="accordion-item" >
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed scale-in-center" style={{background:`${data.Plane.bgcolor}`}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <h3><i className="fas fa-plane"></i></h3>
                <h3 role="button">PLANE TICKETS</h3>
                
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#plane">
                <div className="accordion-body"> <Events events={events} searchCategory='Plane' user={user} onEventUpdate={onEventUpdate} /></div>
              </div>
            </div>
          </div>

          <div className="accordion accordion-flush" id="bookings">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed scale-in-center" style={{background:`${data.Bookings.bgcolor}`}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseBookings" aria-expanded="false" aria-controls="flush-collapseOne">
                <h3><i className="fas fa-bed"></i></h3>
                <h3 role="button">BOOKING ROOMS</h3>
                
                </button>
              </h2>
              <div id="flush-collapseBookings" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#bookings">
                <div className="accordion-body"><Events events={events} searchCategory='Bookings' user={user} /></div>
              </div>
            </div>
          </div>

          <div className="accordion accordion-flush" id="rentals">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed scale-in-center" style={{background:`${data.Rentals.bgcolor}`}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapserentals" aria-expanded="false" aria-controls="flush-collapseOne">
                <h3><i className="fas fa-car"></i></h3>
                <h3 role="button">RENTALS</h3>
                
                </button>
              </h2>
              <div id="flush-collapserentals" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#rentals">
                <div className="accordion-body"><Events events={events} searchCategory='Rentals' user={user} onEventUpdate={onEventUpdate} /></div>
              </div>
            </div>
          </div>
          <div className="accordion accordion-flush" id="tickets">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed scale-in-center" style={{background:`${data.Tickets.bgcolor}`}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetickets" aria-expanded="false" aria-controls="flush-collapseOne">
                <h3><i className="fas fa-ticket-alt"></i></h3>
                <h3 role="button">EVENT TICKETS</h3>
                
                </button>
              </h2>
              <div id="flush-collapsetickets" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#tickets">
                <div className="accordion-body"><Events events={events} searchCategory='Tickets' user={user} onEventUpdate={onEventUpdate}/></div>
              </div>
            </div>
          </div>
          <div className="accordion accordion-flush" id="sightseeings">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed scale-in-center"  style={{background:`${data.Sightseeings.bgcolor}`}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSightseeings" aria-expanded="false" aria-controls="flush-collapseOne">
                <h3><i className="fas fa-camera"></i></h3>
                <h3 role="button">SIGHTSEEINGS</h3>
                
                </button>
              </h2>
              <div id="flush-collapseSightseeings" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#sightseeings">
                <div className="accordion-body"><Events events={events} searchCategory='Sightseeings' user={user} onEventUpdate={onEventUpdate} /></div>
              </div>
            </div>
          </div>
          <div className="accordion accordion-flush" id="museums">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed scale-in-center"  style={{background:`${data.Museums.bgcolor}`}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsemuseums" aria-expanded="false" aria-controls="flush-collapseOne">
                <h3><i className="fas fa-landmark"></i></h3>
                <h3 role="button">MUSEUMS</h3>
                
                </button>
              </h2>
              <div id="flush-collapsemuseums" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#museums">
                <div className="accordion-body"><Events events={events} searchCategory='Museums' user={user} onEventUpdate={onEventUpdate} /></div>
              </div>
            </div>
          </div>
          <div className="accordion accordion-flush" id="restaurants">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed scale-in-center"  style={{background:`${data.RestaurantsBookings.bgcolor}`}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapserestaurants" aria-expanded="false" aria-controls="flush-collapseOne">
                <h3><i className="fas fa-utensils"></i></h3>
                <h3 role="button">RESTAURANTS</h3>
                
                </button>
              </h2>
              <div id="flush-collapserestaurants" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#restaurants">
                <div className="accordion-body"><Events events={events} searchCategory='RestaurantsBookings' user={user} onEventUpdate={onEventUpdate} /></div>
              </div>
            </div>
          </div>
          <div className="accordion accordion-flush" id="transport">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed scale-in-center"  style={{background:`${data.Transport.bgcolor}`}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetransport" aria-expanded="false" aria-controls="flush-collapseOne">
                <h3><i className="fas fa-subway"></i></h3>
                <h3 role="button">TRANSPORT</h3>
                
                </button>
              </h2>
              <div id="flush-collapsetransport" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#transport">
                <div className="accordion-body"><Events events={events} searchCategory='Transport' user={user} onEventUpdate={onEventUpdate} /></div>
              </div>
            </div>
          </div>
          <div className="accordion accordion-flush" id="exchanges">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed scale-in-center" type="button"  style={{background:`${data.Exchanges.bgcolor}`}} data-bs-toggle="collapse" data-bs-target="#flush-collapseExchanges" aria-expanded="false" aria-controls="flush-collapseOne">
                <h3><i className="fas fa-sync"></i></h3>
                <h3 role="button">EXCHANGES</h3>
                
                </button>
              </h2>
              <div id="flush-collapseExchanges" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#exchanges">
                <div className="accordion-body"><Events events={events} searchCategory='Exchanges' user={user} onEventUpdate={onEventUpdate} /></div>
              </div>
            </div>
          </div>
          <div className="accordion accordion-flush" id="insurance">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed scale-in-center"  style={{background:`${data.TravelInsurance.bgcolor}`}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseinsurance" aria-expanded="false" aria-controls="flush-collapseOne">
                 <h3><i className="fas fa-hand-holding-medical"></i></h3>
                 <h3 role="button">TRAVEL INSURANCE</h3>
               
                </button>
              </h2>
              <div id="flush-collapseinsurance" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#insurance">
                <div className="accordion-body"> <Events events={events} searchCategory='TravelInsurance' user={user} onEventUpdate={onEventUpdate} /></div>
              </div>
            </div>
          </div>
          <div className="accordion accordion-flush" id="lugage">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed scale-in-center"  style={{background:`${data.Lugage.bgcolor}`}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapselugage" aria-expanded="false" aria-controls="flush-collapseOne">
                <h3><i className="fas fa-suitcase"></i></h3>
                <h3 role="button">LUGAGE</h3>
                
                </button>
              </h2>
              <div id="flush-collapselugage" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#lugage">
                <div className="accordion-body"> <Events events={events} searchCategory='Lugage' user={user} onEventUpdate={onEventUpdate} /></div>
              </div>
            </div>
          </div>
          <div className="accordion accordion-flush" id="other">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed scale-in-center"  style={{background:`${data.Others.bgcolor}`}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseother" aria-expanded="false" aria-controls="flush-collapseOne">
                <h3><i className="far fa-bookmark"></i></h3>
                <h3 role="button">OTHER</h3>
                </button>
              </h2>
              <div id="flush-collapseother" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#other">
                <div className="accordion-body"> <Events events={events} searchCategory='Others' user={user} onEventUpdate={onEventUpdate} /></div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default EventResume