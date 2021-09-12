import Calendar from 'react-awesome-calendar';



function Map (props) {


 const events = props.events.map(event => ( event.from = event.startDate, event.to= event.endDate, event.title=event.name, event.color='#1ccb9e', event))

  return(
    <div>
    <Calendar
                events={events}
            />
  </div>
  )
}

export default Map