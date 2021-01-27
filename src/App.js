import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchArea from './Components/SearchArea/SearchArea';
import HeroArea from './Components/HeroArea/HeroArea';
import Home from './Components/Home/Home';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import RegEvent from './Components/RegEvent/RegEvent';
import Blog from './Components/Blog/Blog';
import Donation from './Components/Donation/Donation';
import Admin from './Components/Admin/Admin';
import AddEvent from './Components/AddEvent/AddEvent';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    date: '',
    description: '',
    img: ''
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/RegEvent'>
            <RegEvent></RegEvent>
          </Route>
          <PrivateRoute path='/register/:key'>
            <Register></Register>
          </PrivateRoute>
          <Route path='/register'>
            <Login />
          </Route>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>
          <Route path='/events'>
            <RegEvent></RegEvent>
          </Route>
          <Route path='/donation' >
            <Donation></Donation>
          </Route>
          <Route path='/admin' >
            <Admin></Admin>
          </Route>
          <Route path='/addEvent' >
            <AddEvent></AddEvent>
          </Route>
          <Route path='*' >
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
