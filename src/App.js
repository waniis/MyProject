
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBar from './Components/NavBar';
import Task from './pages/Task/Task';


function App() {
  return (
    <div className="App">


      <BrowserRouter>
       
        <NavBar></NavBar>  
        <Route path = "/" exact component ={Home} />
        <Route path="/task" exact component={Task} />
        

    </BrowserRouter>
    </div>
  );
}

export default App;
