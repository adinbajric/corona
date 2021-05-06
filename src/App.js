
import './App.css';
import{Route,Switch} from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Home from './pages/home/Home';
import Contacts from './pages/contacts/Contacts';
import Symptoms from './pages/symptoms/Symptoms';
import Footer from './Components/footer/Footer';
import Blog from './pages/blog/Blog';
import Covid19 from './pages/covid19/Covid19';


function App() { 
  return (
    <div className="App">    
      <Navbar/>
      <Switch>
        <Route exact path='/'>
              <Home/>
        </Route>
        <Route path='/Contacts'>
              <Contacts/>
        </Route>
        <Route path='/Symptoms'>
              <Symptoms/>
        </Route>
        <Route path='/Blog'>
              <Blog/>
        </Route>
        <Route path='/Covid19'>
              <Covid19/>
        </Route>
      </Switch> 
      <Footer/>     
    </div>
  );
}

export default App;
