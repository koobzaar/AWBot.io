import React, { useState, useEffect } from "react";
import "./home.css";
import "../../common/colorPalette.css";
import Navbar from "../../components/navbar/navbar";
import Dashboard from "../Dashboard/dashboard";
import GlobalStyles from "../../global";
import Settings from "../Settings/settings";
import CompactView from "../CompactView/compact";

function Home() {
 
  const [totalTLMMined, settotalTLMMined] = useState(300);
  const [rateTLMHour, setrateTLMHour] = useState(1.39);
  var dashboardModel = {
    tlmBalance: 3213123.5,
    CPU: 30,
    memory: 38,
    network: 30,
    waxStaked: 384,
    currentLand: "Active Vulcano (399:99)",
    landComission: "30%",
    arrayCurrentItemsName: [
      "Default Shovel",
      "Default Shovel",
      "Default Shovel",
    ],
    arrayLastLogs: [
      "MAY 05 2021 19:59 - Mined 1,532 TLM",
      "MAY 05 2021 19:59 - Mined 1,532 TLM",
      "MAY 05 2021 19:59 - Mined 1,532 TLM",
      "MAY 05 2021 19:59 - Mined 1,532 TLM",
      "MAY 05 2021 19:59 - Mined 1,532 TLM",
      "MAY 05 2021 19:59 - Mined 1,532 TLM",
      "MAY 05 2021 19:59 - Mined 1,532 TLM",
      "MAY 05 2021 19:59 - Mined 1,532 TLM",
      "MAY 05 2021 19:59 - Mined 1,532 TLM",
      "MAY 05 2021 19:59 - Mined 1,532 TLM",
      "MAY 05 2021 19:59 - Mined 1,532 TLM",
      "MAY 05 2021 19:59 - Mined 1,532 TLM",
      "MAY 05 2021 19:59 - Mined 1,532 TLM",
    ],
    botState: "MINING",
    autoMine: true,
    cpuLimit: 90,
    walletName: "login",
  };

 
  const [dashboardState, setDashboardState] = useState(dashboardModel);
  function getCurrentStateOfDashboard() {
    return (
      <Dashboard
        totalTLMMined={totalTLMMined}
        rateTLMHour={rateTLMHour}
        tlmBalance={dashboardState.tlmBalance}
        CPU={dashboardState.CPU}
        memory={dashboardState.memory}
        network={dashboardState.network}
        waxStaked={dashboardState.waxStaked}
        currentLand={dashboardState.currentLand}
        landComission={dashboardState.landComission}
        arrayCurrentItemsName={dashboardState.arrayCurrentItemsName}
        arrayLastLogs={dashboardState.arrayLastLogs}
        botState={dashboardState.botState}
        autoMine={dashboardState.autoMine}
        cpuLimit={dashboardState.cpuLimit}
        mineButtonFunction={mine}
        loginFunction={login}
        walletName={dashboardState.walletName}
      />
    );
  }


  function mine() {
    alert("Mine");
  }

  function login() {
    alert("Login");
  }
  const [currentbag, setbag] = useState([
    {
      id: "Img1",
      image: "QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb",
    },
    {
      id: "Img2",
      image: "QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb",
    },
    {
      id: "Img3",
      image: "QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb",
    },
    {
      id: "Img4",
      image: "QmYm1FG7LxhF3mFUaVmVEVqRztEmByVbHwL6ZWXwVY2dvb",
    },
  ]);

  function userSettingConfig(event) {
    alert(event.cpuLimit);
    alert(event.waxtoStake);
    alert(event.setlandID);
    alert(event.selectednftarr);
  }

  // Visual functions
  function changeCurrentView(idToFocus) {
    if (idToFocus === 0) setView(getCurrentStateOfDashboard());
    else if (idToFocus === 1)
      setView(
        <Settings
          submitDataFunction={userSettingConfig}
          currentUserBag={currentbag}
          autoMine={dashboardState.autoMine}
        />
      );
    else return;
  }
  function hideNavbar(deviceWidth) {
    if (deviceWidth <= 550) {
      return <CompactView 
      totalTLMMined={totalTLMMined}
      rateTLMHour={rateTLMHour}
      CPU={dashboardState.CPU}
      currentLand={dashboardState.currentLand}
      landComission={dashboardState.landComission}
      botState={dashboardState.botState}
      mineButtonFunction={mine}
      walletName={dashboardState.walletName}
      />;
    } else if (deviceWidth <= 1000) return getCurrentStateOfDashboard();
    else
      return (
        <>
          <Navbar selectedID={changeCurrentView} />
          {currentUserView}
        </>
      );
  }

// Error alert



// End of error alert







  const [currentUserView, setView] = useState(getCurrentStateOfDashboard());

  const size = useWindowSize();
  return (
    <div id="app">
      <GlobalStyles />
      {hideNavbar(size.width)}
    </div>
  );
}
// Hook
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
export default Home;
