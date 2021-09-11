import { Redirect, Route, Switch } from "react-router";
import TravelDetail from "./components/detail/Travel-Detail";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import TravelList from "./components/travels/list/Travel-list";
import Login from "./components/user/auth/Auth";
import EventDetail from "./components/events/EventDetail";
import Me from "./components/user/auth/Me";
import Calendar from "react-calendar";
import NewCalendar from "./components/calendar/NewCalendar";



function App() {
  return (
    <>
    <Header/>    
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/me" component={ Me } />
      <Route exact path="/travels" component={ TravelList } />
      <Route exact path="/my-travels" component={ TravelList } />
      <Route exact path="/travel-calendar" component={ NewCalendar } />
      <Route exact path="/my-travels/events/:id" component= { EventDetail } />
      <Route exact path="/my-travels/:id" component={ TravelDetail} />     
      <Route exact path="/login" component={ Login } />

      <Redirect to="/" />
    </Switch>
    </>
  );
}

export default App;
