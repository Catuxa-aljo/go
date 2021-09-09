import TravelItem from "./Travel-item";
import travelService from "../../../services/travel.service"
import { useState, useEffect } from 'react'
import TravelNew from "./Travel-new";
import { useLocation } from 'react-router-dom'

function TravelList (props) {
    const [travels, setTravels] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
 /*     const location = useLocation()
        location.pathname ==='/travels'
        ? */
        fetchTravels()
/*         :
        fetchMyTravels() */
    }, [])

    function fetchTravels () {        
        travelService.list()
        .then(travels => { 
            setTravels(travels)
            setLoading(false) 
        })
        .catch(error => {
            console.error(error)})
    }

    function fetchMyTravels() {
        travelService.listmine()
        .then(travels => { 
            setTravels(travels)
            setLoading(false) 
        })
        .catch(error => {
            console.error(error)})
    }

    return(
        <>
        {isLoading && 
        <div className="loading">
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>
            }
        {!isLoading && 
        <div>
        <h1>Get inspired by the community</h1>
        <p>it amet consequat erat. In ligula velit, dictum nec libero at, pulvinar consequat odio. Fusce rhoncus suscipit eros. Fusce rutrum lorem ante, et ultrices magna semper ut. Sed ut lorem in ipsum ullamcorper imperdiet.</p>
        <div className="container row">
            {travels.map(travel => 
                <TravelItem key={travel.id} {...travel}/>
            )}
        </div>
        <TravelNew />
        </div>        
        }
        
        </>
    )
}

export default TravelList