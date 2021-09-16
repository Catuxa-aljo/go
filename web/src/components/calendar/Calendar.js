import Calendar from 'react-awesome-calendar';
import data from '../../data/travelEvents.json'


function Map (props) {


 const events = props.events.map(event => ( 
   event.from = event.startDate, 
   event.to= event.endDate, 
   event.title=event.name,
   event.color=data[event.category].color, 
    event))

  return(
    <div>
      <h1>STEP 2: On Travel!</h1>
      <h2>Congratulations, now you are on your way!</h2>
    <Calendar
                events={events}
            />
  </div>
  )
}

export default Map