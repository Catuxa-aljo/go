import { NavLink } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import categories from '../../data/travelEvents.json'
import Moment from 'react-moment';


function Timeline({startDate, endDate, name, description, id, category, time}) {
    let img = Array.from(category)

    return(      
            <VerticalTimelineElement            
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#00C9FF', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #00C9FF' }}
            date={<Moment>{startDate}</Moment>}
            iconStyle={{ background:'#92FE9D', color: '#fff' }}
            //icon={<img src={categories.{TravelInsurance}.icon} />}
            >            
            <h4 className="vertical-timeline-element-subtitle"><i class="far fa-calendar-check"></i> {<Moment format="YYYY/MM/DD">{startDate}</Moment>} <i class="far fa-clock"></i> {time}</h4>
            <h3 className="vertical-timeline-element-title">{name}</h3>            
            <p>
            {description}
            </p>
            <NavLink exact to={`/my-travels/events/${id}`}><i className="fas fa-eye"></i> Details</NavLink>
        </VerticalTimelineElement>
    )
}

export default Timeline