import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomeComponent from './Components/HomeComponent';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<HomeComponent/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
