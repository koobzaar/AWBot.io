import '../../common/colorPalette.css'
import './Navbar.css';

// Navbar Icons
import LogoAWBot from '../../assets/logos/awBotLogo.svg';
import LogoDiscord from '../../assets/logos/discordLogo.svg';
import LogoAlcorExchange from '../../assets/logos/alcorExchangeLogo.svg';
import LogoWaxp from '../../assets/logos/waxpLogo.svg';
import IconDashboard from '../../assets/navbar/dashboardIcon.svg';



function Navbar(){
    return(
        <div id="Navbar">
            <img src={LogoAWBot} className="sideLogo" id="AWBotLogo"/>
            <img src={IconDashboard} className="sideLogo"/>
            <img src={LogoDiscord} className="sideLogo"/>
            <img src={LogoWaxp} className="sideLogo"/>
            <img src={LogoAlcorExchange} className="sideLogo"/>
        </div>
    );

}
export default Navbar