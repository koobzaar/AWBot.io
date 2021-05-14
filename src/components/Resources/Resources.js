import '../../common/colorPalette.css'
import './Resources.css';
import { Line, Circle } from 'rc-progress';
import lang from '../../lang/en_US.json';
// Icons
// CPU="90" memory="30" network="25" waxStaked="734"

function Resources(props){
    return(
        <div id='resources'>
            <section className="user-resources-info">
                <h1 id="resources-title">{lang.strings.Resources}</h1>
                <div className="resources-category">
                    <p className="resources-category-title">{lang.strings.CPU}</p>
                    <div className="progressBar"><div className="progress"><Line percent={props.CPU} strokeWidth="2" trailWidth="2" strokeColor="#147ad6" trailColor="#3E4A5D"/></div><span className="current-resource-value">{props.CPU}%</span></div>
                </div>
                <div className="resources-category">
                    <p className="resources-category-title">{lang.strings.Memory}</p>
                    <div className="progressBar"><div className="progress"><Line percent={props.memory} strokeWidth="2" trailWidth="2" strokeColor="#147ad6" trailColor="#3E4A5D"/></div><span className="current-resource-value">{props.memory}%</span></div>
                </div>
                <div className="resources-category">
                    <p className="resources-category-title">{lang.strings.Network}</p>
                    <div className="progressBar"><div className="progress"><Line percent={props.network} strokeWidth="2" trailWidth="2" strokeColor="#147ad6" trailColor="#3E4A5D"/></div><span className="current-resource-value">{props.network}%</span></div>
                </div>
            </section>

            <section className="wax-staked-info">
                <div className="wax-staked-value">
                    <h1 id="wax-staked">{props.waxStaked}</h1>
                </div>
                <p id="wax-staked-title">{lang.strings.waxStaked}</p>
                <p id="click-to-stake">{lang.strings.clickHereToStakeMore}</p>
            </section>
        </div>
    );

}
export default Resources;