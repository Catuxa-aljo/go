
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

function Calendar ({startingDate, endDate, events}) {
  return(
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor={startingDate}
      endAccessor={endDate}
      style={{ height: 500 }}
    />
  </div>
  )
}

export default Calendar