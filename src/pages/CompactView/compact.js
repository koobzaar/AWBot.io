import React from "react";
import '../../common/colorPalette.css';
import './compact.css';
import lang from '../../lang/en_US.json'
import { Line } from 'rc-progress';

// totalTLMMined={totalTLMMined}
//       rateTLMHour={rateTLMHour}
//       CPU={dashboardState.CPU}
//       currentLand={dashboardState.currentLand}
//       landComission={dashboardState.landComission}
//       botState={dashboardState.botState}
//       mineButtonFunction={mine}
//       walletName={dashboardState.walletName}

function compactView(props) {
  return (
    <div id="compact-view">
        <h3 id="min-wallet-name">{props.walletName}</h3>
        <h2 id="min-current-state-title">{lang.strings.botCurrentState}</h2>
        <h1 id="min-current-state">{props.botState}</h1>
        <h1 id="min-current-land">{props.currentLand}</h1>
        <h2 id="min-current-land-comission">{props.landComission} {lang.strings.COMISSION}</h2>
        <h2 id="min-total-tlm-mined">{props.totalTLMMined} TLM <span>{lang.strings.mined}</span></h2>
        <h2 id="min-current-tlm-mined-hour">{props.rateTLMHour} TLM/{lang.strings.hour} <span>{lang.strings.mined}</span></h2>
        <div id="min-progress-bar">
        <p id="min-resources-title">{lang.strings.Resources}</p>
        <p id="min-resources-cpu">{lang.strings.CPU}</p>
        <Line percent={props.CPU} strokeWidth="3" trailWidth="3" strokeColor="#147ad6" trailColor="#3E4A5D"/>
        </div>
        <div className="min-mine-button">
        <button id="start-mining" onClick={props.mineButtonFunction}>{lang.strings.startMining}</button>
        </div>
    </div>
  );
}
export default compactView;
