
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewHome from './Pages/Home/NewHome/NewHome';
import Login from './Pages/Login/Login';
import Header from './Pages/SharedPages/Header/Header';

function App() {
  return (
    <div className="App">
   
<Header></Header>
   <Routes>

<Route path='/'   element={<NewHome></NewHome>}></Route>
<Route path='/login'   element ={<Login></Login>}></Route>

   </Routes>
    </div>
  );
}

export default App;
