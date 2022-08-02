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
import Report from './pages/PDF';
import MoldReport from './pages/MoldPDF';
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
        <Route path='/Report' element={<Report/>}/>
        <Route path='/MoldReport' element={<MoldReport/>}/>
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
  else if (currentPath === '/Report'){
    return <div></div>
  }
  else if (currentPath === '/MoldReport'){
    return <div></div>
  }
  else{
    return (
    <div><DashboardHeader/><SideBar/></div> )  
  }
}
