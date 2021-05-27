import { useState } from 'react';
import '../../../common/colorPalette.css'
import './nft.css';
//  selectNFT={selectNFT} deselectNFT={deselectNFT}
function NFTCard(props){
    var isThisNFTSelected = false;
    const [currentOpacity, setOpacity] = useState(1)
    function userClickToSelect(currentOpacity,nftID){
        if(currentOpacity===1){
            setOpacity(0.3);
            props.selectNFT(nftID)
            isThisNFTSelected = true;
        }
        else{
            setOpacity(1);
            props.deselectNFT(nftID)
            isThisNFTSelected = false;
        }
    }
    // image URL = props.image
    
    let baseNFTurl = "https://ipfs.atomichub.io/ipfs/"+props.image;
    return(
        <div id="NFTCard" name={props.id} onClick={(e)=>{
            
            userClickToSelect(currentOpacity,e.target.name)
          }} style={{opacity:currentOpacity}}>
         <img src={baseNFTurl} name={props.id}/>
        </div>
    );

}
export default NFTCard