import React, {useState} from "react";
import "../../common/colorPalette.css";
import "./settings.css";
import NFTCard from "../../components/settings/nftcard/nft.js";
// submitDataFunction
function Settings(props) {
  const [cpulimit, setcpulimit] = useState(null);
  const [waxtostake, setwaxtostake] = useState(null);
  const [setlandid, setsetlandid] = useState(null);
  const [checkboxAutomine, setAutoMine] = useState(true);
  const [timeoutBot, setTimeoutBot] = useState(true);
  const [nftSelected, setNFT] = useState([]);
  function grabFormData(){
    var userSubmit={
      "cpuLimit":cpulimit,
      "waxtoStake":waxtostake,
      "setlandID":setlandid,
      "selectednftarr":nftSelected,
      "autoMineEnabled":checkboxAutomine,
      "timeoutBot":timeoutBot
    }
    props.submitDataFunction(userSubmit);
    
  }
  function selectNFT(id){
    setNFT([...nftSelected,id])
  }
 
  function deselectNFT(id){
    var tempArray = nftSelected;
    var index = tempArray.indexOf(id);
    if(index!==-1)
    tempArray.splice(index,1);
    setNFT(tempArray)
    
  }
  return (
    <div id="Settings">
      <session className="user-bag">
        {
          props.currentUserBag.map(element=>{
            return(<NFTCard image={element.image} id={element.id} key={element.id} selectNFT={selectNFT} deselectNFT={deselectNFT}/>)
          })
        }
       
      </session>
      <session className="bot-settings">
        <form onSubmit={grabFormData}>
        <label>Set a CPU limit</label>
        <input
          className="form-input"
          id="cpu-limit"
          placeholder="Limit"
          type="number"
          max="100"
          onInput={e=>setcpulimit(e.target.value)}
        />
        <label>Stake more WAX</label>
        <input
          className="form-input"
          id="stake-more"
          placeholder="Amount"
          type="number"
          max="100"
          onInput={e=>setwaxtostake(e.target.value)}
        />
        <label>Set your land to mine</label>
        <input
          className="form-input"
          id="land-mine"
          placeholder="ID"
          type="number"
          onInput={e=>setsetlandid(e.target.value)}
        />
        <label>Auto mine enabled</label>
        <input
          className="checkbox-input"
          id="auto-mine"
          placeholder="ID"
          type="checkbox"
          onChange={e=>setAutoMine(e.target.value)}
          checked={props.autoMine}
        />
        <input
          className="form-input"
          id="timeout-mine"
          placeholder="Pause bot for x min..."
          type="number"
          onInput={e=>setTimeoutBot(e.target.value)}
        />
        <input className="form-submit" type="submit" value="set config" />
        </form>
      </session>
    </div>
  );
}
export default Settings;
