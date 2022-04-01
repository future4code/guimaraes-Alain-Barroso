import React from "react";

import HomePage from '../pages/HomePage/HomePage';
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage';
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage';
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


const Router = () => {
    return (
        <div>
    <BrowserRouter>
      
      <Routes>

        <Route index element={<HomePage />} />
        <Route path='list' element={<ListTripsPage />} />
        <Route path='admhome' element={<AdminHomePage />} />
        <Route path='application' element={<ApplicationFormPage />} />

      </Routes>

    </BrowserRouter>

        </div>

    )

}

export default Router