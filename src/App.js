import './App.css';
import SideBar from './components/SideBar';
import DashboardHeader from './components/DashboardHeader';
import HomePage from './pages/Home';
import MoldsPage from './pages/Molds';
import Data from './pages/Data';
import MachineData from './pages/MachineData';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <DashboardHeader />
      <SideBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Molds' element={<MoldsPage />} />
        <Route path='/Machine' element={<MachineData />} />
        <Route path='/Data' element={<Data />} />
      </Routes>

    </div>
  );
}

export default App;
