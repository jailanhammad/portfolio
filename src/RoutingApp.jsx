import React from 'react';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import WorkPage from './Pages/WorkPage';
import Error from './Pages/Error';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestAPI from './Pages/TestAPI';
import ContactPage from './Pages/ContactPage';
import ProjectDetails from './Pages/ProjectDetails';


const RoutingApp = () => {

    const url = window.location.href.split("/");
    console.log(url)

    return ( 


<>

<BrowserRouter>

<Routes>

<Route path='/' element={<Home />} />
<Route path='/About-me' element={<AboutPage />} />
<Route path='/Work-Page' element={<WorkPage />} />
<Route path='/Project-Details' element={<ProjectDetails />} />
<Route path='/Contact-Page' element={<ContactPage />} />
<Route path='/test-api' element={<TestAPI />} />
<Route path='/*' element={<Error />} />


</Routes>


</BrowserRouter>


</>


     );
}
 
export default RoutingApp;