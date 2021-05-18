import '../../common/colorPalette.css'
import './Navbar.css';

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
            <img src={LogoAWBot} className="sideLogo" id="AWBotLogo"/>
            <img src={IconDashboard} onClick={() => props.selectedID(0)} className="sideLogo"/>
            <img src={IconSettings}  onClick={() => props.selectedID(1)} className="sideLogo"/>
            <img src={LogoDiscord} className="sideLogo"/>
            <img src={LogoWaxp} className="sideLogo"/>
            <img src={LogoAlcorExchange} className="sideLogo"/>
        </div>
    );

}
export default Navbar