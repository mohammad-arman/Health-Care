import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import About from './Pages/About/About';
import Doctors from './Pages/Doctors/Doctors';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
            <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>  
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <PrivateRoute exact path="/ourdoctor">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/serviceDetails/:serviceId">
            <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
            <Footer></Footer>  
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
