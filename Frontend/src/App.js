import './App.css';
import './Components/login.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/login.js';
import Signup from './Components/Signup';
import Home from './Components/Home';
import AddOrUpdate from './Components/AddOrUpdate';
import SideBar from './SideBar/SideBar';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <SideBar/>
    <Routes>
    <Route path="/login" element ={<Login />}></Route>
    <Route path="/register" element ={<Signup />}></Route>
    <Route path="/home" element ={<Home />}></Route>
    <Route path="/add" element ={<AddOrUpdate />}></Route>
    <Route path="/" element ={<Dashboard />}></Route>
    <Route path="/sample" element ={<samplefile/>}></Route>
    <Route path="/update/:id" element ={<AddOrUpdate />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
