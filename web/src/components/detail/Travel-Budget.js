function Budget ({budget, events, participants}) {
    return(
      <>
        <table className="slide-in-left">
        <thead>
        <tr>
          <th> </th>
          <th> </th>          
        </tr>
      </thead>
      <tbody>
        <tr><td>number of participants</td><td>{participants.length}</td></tr>
        {budget !==0 && <tr><td>Initial budget</td><td>{budget}€</td></tr>}
        {events.map((event) => (
          <tr key={event.id}><td>{event.name}</td><td>{event.price}€</td></tr>
        ))}
        <tr><td>Total</td><td>{budget - events.reduce((acc, event) => acc + event.price, 0)}€</td></tr> 
        </tbody>      
      </table>

      <h5>Make counts simple!</h5>
      {(budget - events.reduce((acc, event) => acc + event.price, 0)) / participants.length }€ for participant
      </>
    )
}

export default Budget