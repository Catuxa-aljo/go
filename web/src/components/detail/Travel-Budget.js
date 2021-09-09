function Budget ({budget, events}) {
    return(
        <table className="slide-in-left">
        {budget !==0 && <tr><td>Initial budget</td><td>{budget}€</td></tr>}
        {events.map((event) => (
          <tr><td>{event.name}</td><td>{event.price}€</td></tr>
        ))}
        <tr><td>Total</td><td>{budget - events.reduce((acc, event) => acc + event.price, 0)}</td></tr>
       
      </table>
    )
}

export default Budget