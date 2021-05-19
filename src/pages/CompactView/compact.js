import React from "react";
import '../../common/colorPalette.css';
import './compact.css';
import lang from '../../lang/en_US.json'
import { Line } from 'rc-progress';
function compactView(props) {
  return (
    <div id="compact-view">
        <h3 id="min-wallet-name">1boss.wam</h3>
        <h2 id="min-current-state-title">{lang.strings.botCurrentState}</h2>
        <h1 id="min-current-state">{lang.strings.states.error}</h1>
        <h1 id="min-current-land">ACTIVE VULCANO (389:39)</h1>
        <h2 id="min-current-land-comission">2% COMISSION</h2>
        <h2 id="min-total-tlm-mined">278 TLM <span>{lang.strings.mined}</span></h2>
        <h2 id="min-current-tlm-mined-hour">1.74 TLM/{lang.strings.hour} <span>{lang.strings.mined}</span></h2>
        <div id="min-progress-bar">
        <p id="min-resources-title">{lang.strings.Resources}</p>
        <p id="min-resources-cpu">{lang.strings.CPU}</p>
        <Line percent={props.cpu} strokeWidth="3" trailWidth="3" strokeColor="#147ad6" trailColor="#3E4A5D"/>
        </div>
        <div className="min-mine-button">
        <button id="start-mining">{lang.strings.startMining}</button>
        </div>
    </div>
  );
}
export default compactView;
