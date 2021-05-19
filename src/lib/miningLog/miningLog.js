import '../../common/colorPalette.css';
import './miningLog.css';


function prepareLogPositionsToHeading(MiningLog) {
    if(checkArrayViability(MiningLog) === 200)
    var PastLogs = MiningLog.slice(1)
    return {
        "mostRecentMiningLog": MiningLog[0],
        "allOthersArrayItems": PastLogs,
    }; 
}

function checkArrayViability(MinigLogArray) {
    if (Array.isArray(MinigLogArray)) {
       return 200;
    }
    else throw `[DEV_ERROR] Type of Mining Log variable isn't an Array. Received ${typeof MinigLogArray}`
}

function Mining(props) {
    var ArrayLog = prepareLogPositionsToHeading(props.arrayMiningLog)
    return ( 
    <div id="mining-log">
        <div>
        <h1 id="recent-log">{ArrayLog.mostRecentMiningLog}</h1>
        </div>
        <div className="past-logs">
        {ArrayLog.allOthersArrayItems.map((item)=>{
            return(<p className="past-log-item">{item}</p>)
        })}
        </div>
    </div>
    );

}
export default Mining