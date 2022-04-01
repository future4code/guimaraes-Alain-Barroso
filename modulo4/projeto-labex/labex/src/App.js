import './App.css';

import HomePage from './pages/HomePage/HomePage';
import ListTripsPage from './pages/ListTripsPage/ListTripsPage';
import AdminHomePage from './pages/AdminHomePage/AdminHomePage';
import ApplicationFormPage from './pages/ApplicationFormPage/ApplicationFormPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>

          <Route index element={<HomePage />} />
          <Route path='lsit' element={<ListTripsPage />} />
          <Route path='admhome' element={<AdminHomePage />} />
          <Route path='application' element={<ApplicationFormPage />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
