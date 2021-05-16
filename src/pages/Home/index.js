import React from 'react';
import './home.css'
import '../../common/colorPalette.css'
import Navbar from '../../components/Navbar/Navbar'
import Dashboard from '../../components/Dashboard/Dashboard'
import GlobalStyles from "../../global";
function Home() {
  return (
    <div id="app">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <GlobalStyles/>

      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default Home;