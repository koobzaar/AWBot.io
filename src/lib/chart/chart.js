import React from 'react'
import '../../common/colorPalette.css'
import './chart.css';
import lang from '../../lang/en_US.json';
// Navbar Icons
import { Chart } from 'react-charts'
function ChartJS(props){
    const series = React.useMemo(
        () => ({
          type: "area"
        }),
        []
      );
      const axes = React.useMemo(
        () => [
          { primary: true, position: "bottom", type: "time" },
          { position: "left", type: "linear", stacked: false }
        ],
        []
      );
      const data = React.useMemo(
        () => [
          {
            label: "TLM",
            datums: [
              {
                x: 1,
                y: 1
              },
              {
                x:2,
                y: 2
              },
              {
                x: 3,
                y: 3
              }
            ]
          }
        ],
        []
      );
    return(
        <div id="Chart">
            <h1>{props.title}</h1>
            <Chart data={data} series={series} axes={axes} />
        </div>
    );

}
export default ChartJS