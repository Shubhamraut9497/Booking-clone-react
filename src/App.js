import "./App.css";
import Home from './components/Home/Home'
import Hotels from './components/Hotels/Hotels'
import Flight from './components/Flight/Flight'
import Login from './components/Login/Login'
import FlightRes from './components/FlightResult/FlightRes'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register/Register'
import Payment from './components/Payment/Payment'
import Success from './components/Success/Success'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels/>}/>
          <Route path="/flights" element={<Flight/>}/>
          <Route path="/searchFlights" element={<FlightRes/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/Payment" element ={<Payment/>}/>
          <Route path="/success" element={<Success/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
