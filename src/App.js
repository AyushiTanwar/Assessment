import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter as Mains, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
       <Mains>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Mains>
         </div>
  );
}

export default App;
