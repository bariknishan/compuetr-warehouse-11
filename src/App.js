
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewHome from './Pages/Home/NewHome/NewHome';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import Header from './Pages/SharedPages/Header/Header';
import NotFound from './Pages/SharedPages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
   
<Header></Header>
   <Routes>

<Route path='/'   element={<NewHome></NewHome>}></Route>
<Route path='/newhome'   element={<NewHome></NewHome>}></Route>
<Route path='/item/:id'   element={<InventoryDetail></InventoryDetail>}></Route>
<Route path='/login'   element ={<Login></Login>}></Route>
<Route path='/signup'   element ={<SignUp></SignUp>}></Route>
<Route path= "*"  element ={<NotFound></NotFound>}></Route>

   </Routes>
    </div>
  );
}

export default App;
