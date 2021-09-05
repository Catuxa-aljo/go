import travelService from '../../services/travel.service'
import { useEffect, useState } from 'react'

function TravelDetail (props) {
    const [travel, setTravel] = useState({})

    useEffect(() => {
        const id = props.match?.params?.id;
        travelService.detail(id)
            .then(travel => setTravel(travel))
            .catch(error => console.error(error))
    }, [])

    return(
        <div className="container">
            <h1>{travel.title}</h1>
        </div>
    )
}

export default TravelDetail