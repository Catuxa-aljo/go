import { Redirect, Route, Switch } from "react-router";
import TravelDetail from "./components/detail/Travel-Detail";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import TravelList from "./components/travels/list/Travel-list";
import Login from "./components/user/auth/Auth";


function App() {
  return (
    <>
    <Header/>    
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/travels" component={ TravelList } />
      <Route exact path="/my-travels/:id" component={ TravelDetail} />
      <Route exact path="/login" component={ Login } />
      <Redirect to="/" />
    </Switch>
    </>
  );
}

export default App;
