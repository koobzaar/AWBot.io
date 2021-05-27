import '../../common/colorPalette.css'
import './balance.css';
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
    function formatTLM(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return(
        <div id='balance'>
            <h1 id="title-tlm-balance">{lang.strings.TotalTLMbalance}</h1>
            <div className="current-tlm-details">
                <h1 id="current-tlm-balance">{formatTLM(props.tlmBalance)}<span onClick={()=>copyCurrentBalanceToClipboard(props.tlmBalance)}><img id="copy-to-clipboard" src={copyToClipboardIcon}/></span></h1>
                <h1 id="current-tlm-converted"><span id="approx-abbreviation">{lang.strings.approximatelyAbb} $</span> {formatTLM(Math.floor(props.tlmBalance*0.2))} (USD)</h1>
            </div>
        </div>
    );

}
export default Balance;