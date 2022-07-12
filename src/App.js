import './App.css';
import SideBar from './components/SideBar';
import DashboardHeader from './components/DashboardHeader';
import LoginHeader from './components/LoginHeader';
import HomePage from './pages/Home';
import MoldsPage from './pages/Molds';
import Data from './pages/Data';
import Login from './pages/Login';
import MachineData from './pages/MachineData';
import AddMachine from './pages/AddMachine';
import RequireAuth from './auth/RequireAuth';
import {Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <LayoutManager/>

      <Routes>
      <Route path='/' element={<Login/>}/>

      <Route element={<RequireAuth />}>
        <Route path='/Home' element={<HomePage />} />
        <Route path='/Molds' element={<MoldsPage />} />
        <Route path='/Machine' element={<MachineData />} />
        <Route path='/Data' element={<Data />} />
        <Route path='/AddMachine' element={<AddMachine />} />
      </Route>
      </Routes>

    </div>
  );
}

export default App;

function LayoutManager(){
  const currentPath = useLocation().pathname
  if (currentPath === '/'){
    return <div><LoginHeader/></div>
  }
  else{
    return (
    <div><DashboardHeader/><SideBar/></div> )  
  }
}
