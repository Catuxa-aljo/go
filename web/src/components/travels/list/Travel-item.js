import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';

function TravelItem ({title, cover, description, startingDate, endDate, user, participants, id}) {
    return (
        <>
              
			<figure className="effect-ruby scale-in-center">               
				<img src={cover} alt={title} />
				<figcaption>
                    <small>From <Moment format="YYYY/MM/DD">{startingDate}</Moment> to <Moment format="YYYY/MM/DD">{endDate}</Moment> </small>
                    <h3 className="card-title">{title}</h3>                    
                    <p className="card-text">{description}</p>
                    <NavLink exact to={`/my-travels/${id}`} className="stretched-link">GO</NavLink>
				</figcaption>			
			</figure>		
               
        </>
   )
}
export default TravelItem