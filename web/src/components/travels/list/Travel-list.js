import TravelItem from "./Travel-item";
import travelService from "../../../services/travel.service"
import { useState, useEffect, useContext, useCallback } from 'react'
import TravelNew from "./Travel-new";
import { useLocation } from 'react-router-dom'
import {AuthContext} from '../../../contexts/AuthContext'


function TravelList (props) {
    const [ travels, setTravels ] = useState([]);
    const [ isLoading, setLoading ] = useState(true)
    const [ visibility, handleVisibility ] = useState(false)
    const auth = useContext(AuthContext)

    const visibilityForm = useCallback(() => handleVisibility(!visibility), [visibility])

    useEffect(() => {
        fetchTravels()
    }, [visibility])

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
        {!isLoading && !auth && 
        <div>

        </div>
        }
        {!isLoading && auth &&
        <>
        {visibility &&
        <div>
        <TravelNew onTravelUpdate={visibilityForm} />
        </div>
        } 
        <div className="container">
            <h1>Welcome {auth.name}</h1>
            <h2>Start discovering the world! Take a look of your travels</h2>
            <p>it amet consequat erat. In ligula velit, dictum nec libero at, pulvinar consequat odio. Fusce rhoncus suscipit eros. Fusce rutrum lorem ante, et ultrices magna semper ut. Sed ut lorem in ipsum ullamcorper imperdiet.</p>
            <div className="under-modal">
                <button id="bt-add" onClick={visibilityForm}>Add a new travel <i class="fas fa-plus-circle"></i></button>
            </div>
            <div className="grid">
                {travels.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map(travel => 
                    <TravelItem key={travel.id} {...travel}/>
                )}
            </div>
        </div>
           
         </> 
        }
        
        </>
    )
}

export default TravelList