import '../../common/colorPalette.css'
import './Balance.css';
import lang from '../../lang/en_US.json'
// Icons
import eyeIcon from '../../assets/dashboard/eyeIcon.svg';
import copyToClipboardIcon from '../../assets/dashboard/copyToClipboard.svg';

/**
 * @param props.tlmBalance 
 * @returns current TLM balance from WAX Wallet
 */
function copyCurrentBalanceToClipboard(balance){
    let currentBalance = parseFloat(balance);
    navigator.clipboard.writeText(currentBalance)
}

function Balance(props){
    
    return(
        <div id='balance'>
            <div className="hide-balance-button">
                <img id="hide-balance" src={eyeIcon} alt="Eye Icon"/>
            </div>
            <h1 id="title-tlm-balance">{lang.strings.TotalTLMbalance}</h1>
            <div className="current-tlm-details">
                <h1 id="current-tlm-balance">{props.tlmBalance}<span onClick={()=>copyCurrentBalanceToClipboard(props.tlmBalance)}><img id="copy-to-clipboard" src={copyToClipboardIcon}/></span></h1>
                <h1 id="current-tlm-converted"><span id="approx-abbreviation">{lang.strings.approximatelyAbb} $</span> {props.tlmBalance} (USD)</h1>
            </div>
        </div>
    );

}
export default Balance;