import '../../common/colorPalette.css'
import './session.css';
import MiningLog from '../../lib/miningLog/miningLog'
import lang from '../../lang/en_US.json';
import BotConfig from '../botstate/botstate'
// Navbar Icons


function Session(props){
    return(
        <div id="Session">
          <h1 id="session-title">{lang.strings.CurrentMiningSession}</h1>
          <div className="charts">
          <div className="statistics">
            <h1>{props.totalTLMMined}</h1>
            <p>{lang.strings.totalTLMMined}</p>
          </div>
          <div  className="statistics">
          <h1>{props.rateTLMMined}</h1>
            <p>{lang.strings.rateTLMHour}</p>
          </div>
          </div>
          <div className="personal-mining-stats">
            <div className="land-bag">
              <div className="land-status">
                <h3 id="current-land-title">{lang.strings.yourCurrentLand}</h3>
                <h1 id="current-land-name">{props.currentLand}</h1>
                <h2 id="current-land-comission">{props.landComission} {lang.strings.COMISSION}</h2>
              </div>
              <div className="bag-status">
                <h3 id="current-bag-title">{lang.strings.yourCurrentBag}</h3>
                <h1 id="current-bag-items">{props.arrayCurrentItemsName[0]}<br/>{props.arrayCurrentItemsName[1]}<br/>{props.arrayCurrentItemsName[2]}</h1>
              </div>
            </div>
            <div className="mining-log">
              <h3 id="mining-log-title">{lang.strings.miningLog}</h3>
              <MiningLog arrayMiningLog={props.arrayLastLogs}/>
            </div>
           
          </div>
          <div className="bot-config">
              <BotConfig botCurrentState={ props.botState} automine={props.autoMine} cpuLimit={props.cpuLimit} mineButtonFunction={props.mineButtonFunction}/>
            </div>
        </div>
    );

}
export default Session