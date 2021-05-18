import React, { useState }from 'react';
import './home.css'
import '../../common/colorPalette.css'
import Navbar from '../../components/Navbar/Navbar'
import Dashboard from '../../components/Dashboard/Dashboard'
import GlobalStyles from "../../global";
import Settings from '../Settings/settings';

function Home() {
  function changeCurrentView(idToFocus){
    if(idToFocus===0)
    setView(<Dashboard/>)
    else
    setView(<Settings/>)
  }
  const [currentUserView, setView] = useState(<Dashboard/>);
  return (
    <div id="app">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <GlobalStyles/>
      <Navbar selectedID={changeCurrentView}/>
      {currentUserView}
    </div>
  );
}

export default Home;