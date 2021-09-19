import { useEffect, useState } from "react"
import '../../index.css';

function Budget ({budget, events, participants}) {

    const [ isLoading, setIsLoading ] = useState(true)
    useEffect(() => {
      setIsLoading(false)
    }, [])

    return(
      <>
        {!isLoading && 
        <>
        <table className="slide-in-left">
        <thead>
        <tr>
          <th> </th>
          <th> </th>          
        </tr>
      </thead>
      <tbody>
        <tr><td>Number of participants</td><td><span>{participants}</span></td></tr>
        {budget !==0 && <tr className="value"><td>Initial budget</td><td>{budget}€</td></tr>}
        {events.map((event) => (
          event.category != 'Lugage' ? <tr key={event.id} className={event.price !==0 ? "error" : ''}><td>{event.name}</td><td>{event.price !==0 ? "-" : ''}{event.price}€</td></tr> : ''
        ))}
        <tr className="mt-5"><td>Total</td><td>{budget - events.reduce((acc, event) => acc + event.price, 0)}€</td></tr> 
        </tbody>      
      </table>

      <h5 className="mt-5">Do counts simple!</h5>
      <h3>{(budget - events.reduce((acc, event) => acc + event.price, 0)) / participants }€ for participant</h3>
      </>}
      {isLoading && 
            <div className="loading">
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        }
      </>


    )
}

export default Budget