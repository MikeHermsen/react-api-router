import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import ApiList from './components/ApiList/ApiList';
import SelectPoke from './components/Contact/SelectPoke';
import Navbar from './components/Navbar/Navbar';
import './App.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
         <Route path="/" element={ < Home /> } />
         <Route exact path="/api_list" element={ < ApiList /> }   />
         <Route exact path="/select_pokemon/:id/:name" element={ < SelectPoke />} />
      </Routes>
    </div>
  );
};

export default App;