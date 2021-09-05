import Moment from 'react-moment';

function TravelItem ({id, title, cover, description, startingDate}) {
    return (
        <div className="card col-3">
            <img src={cover} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <small className="text-muted"><Moment format="YYYY/MM/DD">{startingDate}</Moment></small>
                <p className="card-text">{description}</p>
                <a href={`/my-travels/${id}`} className="btn btn-primary">Go somewhere</a>
            </div>
            
        </div>
    )
}
export default TravelItem