import React, { useState, useEffect } from "react";
import "./home.css";
import "../../common/colorPalette.css";
import Navbar from "../../components/navbar/navbar";
import Dashboard from "../Dashboard/dashboard";
import GlobalStyles from "../../global";
import Settings from "../Settings/settings";

function Home() {
  function changeCurrentView(idToFocus) {
    if (idToFocus === 0) setView(<Dashboard />);
    else setView(<Settings />);
  }
  function hideNavbar(deviceWidth) {
    console.log(deviceWidth)
    if (deviceWidth <= 1000) return;
    else return <Navbar selectedID={changeCurrentView} />;
  }
  const [currentUserView, setView] = useState(<Dashboard />);
  const size = useWindowSize();
  return (
    <div id="app">
      <GlobalStyles />
      {hideNavbar(size.width)}
      {currentUserView}
    </div>
  );
}
// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
export default Home;
