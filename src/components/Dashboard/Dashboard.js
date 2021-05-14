import '../../common/colorPalette.css'
import './Dashboard.css';
import lang from '../../lang/en_US.json'
// Navbar Icons
import Balance from '../BalanceTLM/Balance';
import Resources from '../Resources/Resources'

function Dashboard(){
    return(
        <div id='Dashboard'>
            <section className="login-bar">
                <div>
                    <p>{lang.strings.login}</p>                
                </div>
            </section>

            <section className="dashboard">
                
                <section className="left-side-dashboard">
                    <div>
                        <section className="dashboard-title">
                                <div>
                                    <h1 id="title-dashboard" >{lang.strings.dashboard}</h1>
                                    <h2 id="subtitle-dashboard">{lang.strings.HOME}</h2>
                                </div>
                        </section>
                        <section className="dashboard-tlm-balance">
                                <Balance tlmBalance="3213123.50"/>
                        </section>
                        <section className="dashboard-tlm-balance">
                                <Resources CPU="90" memory="30" network="25" waxStaked="734"/>
                        </section>
                    </div>
                </section>
               
                <section className="right-side-dashboard">
                    <div>

                    </div>
                </section>
                
           </section>

        </div>
    );

}
export default Dashboard;