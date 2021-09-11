
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

function NewCalendar ({events}) {
    
 const myevents = events.map(event => {
    event.title= event.name
    event.start= event.startingDate
    event.end= event.endDate
    })


  return(
  <div>
    
    <Calendar
      localizer={localizer}
      events={ myevents }
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
  )
}

export default NewCalendar