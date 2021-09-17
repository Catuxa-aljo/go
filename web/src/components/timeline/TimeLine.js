import { NavLink } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import categories from '../../data/travelEvents.json'
import Moment from 'react-moment';



function Timeline({startDate, endDate, name, description, id, category, time, status}) {
    let img = Array.from(category)

    let route = `categories.${category}.icon`

    return(      
            <VerticalTimelineElement            
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#00C9FF', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #00C9FF' }}
            date={<Moment>{startDate}</Moment>}
            iconStyle={{ background:`${categories[category].bgcolor}`, color: '#fff' }}
            icon={<i className={categories[category].icon}></i> }
            >            
            <h4 className="vertical-timeline-element-subtitle"><i className="far fa-calendar-check"></i> {<Moment format="YYYY/MM/DD">{startDate}</Moment>} <i className="far fa-clock"></i> {time}</h4>
            <h3 className="vertical-timeline-element-title">{name}</h3>   
                  
            <p>
            {description}
            </p>
            <h5>Status: {status ? <i className="far fa-calendar-check"></i> : <i className="far fa-calendar"></i>} </h5>    
            <NavLink className="stretched-link" exact to={`/my-travels/events/${id}`}><i className="fas fa-eye"></i> Details</NavLink>
        </VerticalTimelineElement>
    )
}

export default Timeline