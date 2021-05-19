import React, {useState} from "react";
import "../../common/colorPalette.css";
import "./settings.css";
import NFTCard from "../../components/settings/nftcard/nft.js";
// submitDataFunction
function Settings(props) {
  const [cpulimit, setcpulimit] = useState(null);
  const [waxtostake, setwaxtostake] = useState(null);
  const [setlandid, setsetlandid] = useState(null);
  const [nftSelected, setNFT] = useState([]);
  function grabFormData(){
    var userSubmit={
      "cpuLimit":cpulimit,
      "waxtoStake":waxtostake,
      "setlandID":setlandid,
      "selectednftarr":nftSelected
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
            return(<NFTCard image={element.image} id={element.id} selectNFT={selectNFT} deselectNFT={deselectNFT}/>)
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
          name="cpu-limit"
          max="100"
          onInput={e=>setcpulimit(e.target.value)}
        />
        <label>Stake more WAX</label>
        <input
          className="form-input"
          id="stake-more"
          placeholder="Amount"
          type="number"
          name="wax"
          max="100"
          onInput={e=>setwaxtostake(e.target.value)}
        />
        <label>Set your land to mine</label>
        <input
          className="form-input"
          id="land-mine"
          placeholder="ID"
          name="land-id"
          type="number"
          onInput={e=>setsetlandid(e.target.value)}
        />
        <input className="form-submit" type="submit" value="set config" />
        </form>
      </session>
    </div>
  );
}
export default Settings;
