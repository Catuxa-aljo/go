import { Redirect, Route, Switch } from "react-router";
import TravelDetail from "./components/detail/Travel-Detail";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import TravelList from "./components/travels/list/Travel-list";
import Login from "./components/user/auth/Auth";
import EventDetail from "./components/events/EventDetail";
import Me from "./components/user/auth/Me";
import Error from "./components/errors/Error";
import './index.css';
import './assets/css/styles.css';
import AlbumList from "./components/album/AlbumLis";
import PrivateRoute from "./guards/PrivateRoutes";


function App() {
  return (
    <>
    <Header/>    
    <Switch>
      <Route exact path="/" component={ Home } />
      <PrivateRoute exact path="/me" component={ Me } />
      <PrivateRoute exact path="/travels" component={ TravelList } />
      <PrivateRoute exact path="/my-travels" component={ TravelList } />
      <PrivateRoute exact path="/my-travels/events/:id" component= { EventDetail } />
      <Route exact path="/my-travels/:id" component={ TravelDetail} />     
      <Route exact path="/login" component={ Login } />
      <Route exact path="/my-travels/album/:id" component={AlbumList} />
      <Route exact path="/404" component={ Error } />
      <Route exact path="/403" component={ Error } />


    {/* <Redirect to="/" /> */}
    </Switch>
    </>
  );
}

export default App;
