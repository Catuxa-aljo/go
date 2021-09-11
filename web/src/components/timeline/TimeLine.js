import { NavLink } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';


function Timeline({startingDate, endDate, name, description, id, category}) {
    return(
               
            <VerticalTimelineElement            
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={startingDate}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img src={category.icon} />}
            >
            <h4 className="vertical-timeline-element-subtitle">{startingDate}</h4>
            <h3 className="vertical-timeline-element-title">{name}</h3>
            
            <p>
            {description}
            </p>
            <NavLink exact to={`/my-travels/events/${id}`}>Details</NavLink>
        </VerticalTimelineElement>
    )
}

export default Timeline