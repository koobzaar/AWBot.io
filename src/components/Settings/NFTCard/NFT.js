import '../../../common/colorPalette.css'
import './nft.css';


function NFTCard(props){
    // image URL = props.image
    let baseNFTurl = "https://ipfs.atomichub.io/ipfs/"+props.image;
    return(
        <div id="NFTCard">
         <img src={baseNFTurl}/>
        </div>
    );

}
export default NFTCard