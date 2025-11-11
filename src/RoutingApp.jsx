import React from 'react';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';



import { BrowserRouter, Routes, Route } from 'react-router-dom';


const RoutingApp = () => {

    const url = window.location.href.split("/");
    console.log(url)

    return ( 


<>

<BrowserRouter>

<Routes>

<Route path='/' element={<Home />} />
<Route path='/About-me' element={<AboutPage />} />

</Routes>


</BrowserRouter>


</>


     );
}
 
export default RoutingApp;