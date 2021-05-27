import '../../common/colorPalette.css'
import './navbar.css';

// Navbar Icons
import LogoAWBot from '../../assets/logos/awBotLogo.svg';
import LogoDiscord from '../../assets/logos/discordLogo.svg';
import LogoAlcorExchange from '../../assets/logos/alcorExchangeLogo.svg';
import LogoWaxp from '../../assets/logos/waxpLogo.svg';
import IconDashboard from '../../assets/navbar/dashboardIcon.svg';
import IconSettings from '../../assets/navbar/settingsIcon.svg'


function Navbar(props){
    return(
        <div id="Navbar">
            <img src={LogoAWBot} className="sideLogo" id="AWBotLogo"  onClick={() => window.open("https://discord.gg/Ytkp9JtRxf")} alt="Discord"/>
            <img src={IconDashboard} onClick={() => props.selectedID(0)} className="sideLogo" alt="Dashboard"/>
            <img src={IconSettings}  onClick={() => props.selectedID(1)} className="sideLogo" alt="Settings"/>
            <img src={LogoWaxp}  onClick={() => window.open("https://wallet.wax.io/")} className="sideLogo" alt="Wax"/>
            <img src={LogoAlcorExchange}  onClick={() => window.open("https://wax.alcor.exchange/")} className="sideLogo" alt="Alcor Exchange"/>
        </div>
    );

}
export default Navbar