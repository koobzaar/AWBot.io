import "../../common/colorPalette.css";
import "./dashboard.css";
import lang from "../../lang/en_US.json";
// Navbar Icons
import Balance from "../../components/balance/balance.js";
import Resources from "../../components/resources/resources";
import Session from "../../components/session/session";



/**
 * 
 * This components needs these currents parameters to work:
 * @param {number} props.tlmBalance: current user balance in TLM
 * @param {number} props.CPU: current cpu usage
 * @param {number} props.memory: current memory usage
 * @param {number} props.network: current network usage
 * @param {number} props.waxStaked: how much wax is user current staking
 * @param {string} props.currentLand: land where the user is current mining
 * @param {number} props.landComission: current land comission
 * @param {array} props.arrayCurrentItemsName: current user's bag
 * @param {array} props.arrayLastLogs: last logs in array
 * @param {string} props.botState: current state of bot. ex.: mining, charging
 * @param {string} props.autoMine: is the automine activated or not
 * @param {number} props.cpuLimit: how much is the current cpu cap
 * @param {function} props.mineButtonFunction: function that mine button will receave
 * 
 */
function Dashboard(props) {
  return (
    <div id="Dashboard">
      <section className="login-bar">
        <div>
          <p id="login-button" onClick={()=>{
            props.loginFunction()
          }}>{lang.strings.login}</p>
        </div>
      </section>
      <section className="dashboard">
        <section className="left-side-dashboard">
          <div>
            <section className="dashboard-title">
              <div>
                <h1 id="title-dashboard">{lang.strings.dashboard}</h1>
                <h2 id="subtitle-dashboard">{lang.strings.HOME}</h2>
              </div>
            </section>
            <section className="dashboard-tlm-balance">
              <Balance tlmBalance={props.tlmBalance}/>
            </section>
            <section className="dashboard-tlm-balance">
              <Resources CPU={props.CPU} memory={props.memory} network={props.network} waxStaked={props.waxStaked} />
            </section>
          </div>
        </section>

        <section className="right-side-dashboard">
          <div>
            <Session
              currentLand={props.currentLand}
              landComission={props.landComission}
              arrayCurrentItemsName={props.arrayCurrentItemsName}
              arrayLastLogs={props.arrayLastLogs}
              botState={props.botState}
              autoMine={props.autoMine}
              cpuLimit={props.cpuLimit}
              mineButtonFunction={props.mineButtonFunction}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
export default Dashboard;
