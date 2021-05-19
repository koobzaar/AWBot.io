import "../../common/colorPalette.css";
import "./botstate.css";
import lang from "../../lang/en_US.json";
import Button from "@material-ui/core/Button";
//  botCurrentState="mining" automine="on" cpulimit="100"
function BotState(props) {
  return (
    <div id="BotState">
      <div className="bot-current-state">
        <h2 id="bot-state-title">{lang.strings.botCurrentState}</h2>
        <h1 id="bot-state-now">{props.botCurrentState}</h1>
      </div>
      <div className="current-bot-config">
        <div className="auto-mine-and-cpu-limit">
          <div>
            <p>{lang.strings.autoMine}</p>
            <p>{props.automine}</p>
          </div>
          <div>
            <p>{lang.strings.cpuLimit}</p>
            <p>{props.cpuLimit}%</p>
          </div>
        </div>
        <div className="mine-button">
          <button id="start-mining">{lang.strings.startMining}</button>
        </div>
      </div>
    </div>
  );
}
export default BotState;
