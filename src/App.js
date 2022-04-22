import React from 'react';
import { BrowserRouter, Route, Routes,} from "react-router-dom";

import Home from './Home';
import Form from './Form';

//Two pages, homepage and new menu item page

function App() {
  return (

    <div>
    <BrowserRouter>

    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addfood" element={<Form/>} />
      </Routes>
   
    </BrowserRouter>

    </div>


  ); 
} 

export default App; 