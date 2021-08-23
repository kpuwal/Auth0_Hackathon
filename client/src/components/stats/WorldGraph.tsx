import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { prepData } from './helper';
import { renderMaxIcon } from './svgHelper';
import GraphGrid from './GraphGrid';
import GraphLegend from './GraphLegend';
import MaxIconSelector from './MaxIconSelector';
import '../../css/worldgraph.css';

const WorldGraph = () => {
  const dates = useSelector((state: RootState) => state.stats.byDates);
  const data = prepData(dates);

  return (
    <>
    <GraphLegend />
    <svg width="550px" height="200px" viewBox={`-20 0 940 400`}>
      {
        data.max.map((item, idx) => <MaxIconSelector
          key={idx}
          name={item.mood || "empty"}
          posX={item.posX || 0}
          posY={item.posY || 0}
          txt={item.txtVal}
          maxStyle={"speech-bubble-graph"}
        />)
      }
      <MaxIconSelector
          name={data.main.mood || "empty"}
          posX={data.main.posX || 0}
          posY={data.main.posY || 0}
          txt={data.main.txtVal}
          maxStyle={"speech-bubble-graph-maxOne"}
        />
      {/* {
        renderMaxIcon(data.second.mood || "empty", 1.6, data.second.posX || 0, data.second.posY || 0, data.second.txtVal, 22, "speech-bubble-graph-maxTwo")
      }
       {
        renderMaxIcon(data.third.mood || "empty", 1.6, data.third.posX || 0, data.third.posY || 0, data.third.txtVal, 23, "speech-bubble-graph-maxTwo")
      } */}
       <GraphGrid />
      {/* positive mood graph */}
      <g transform="matrix(1 0 0 -1 0 340)">
        <polyline points={data.posPoints} style={{fill: "none", opacity: .2, stroke: "#1f1f1f", strokeWidth: 5}} />
        <polyline points={data.posPoints} style={{fill: "#1f1f1f", opacity: .03, stroke: "#1f1f1f", strokeWidth: 5}} />
      </g>
      {/* neutral mood graph */}
      <g transform="matrix(1 0 0 -1 0 346)">
        <polyline points={data.neuPoints} style={{fill: "none", opacity: .4,stroke: "#1f1f1f", strokeWidth: 7}} />
        <polyline points={data.neuPoints} style={{fill: "#1f1f1f", opacity: .03,stroke: "#1f1f1f", strokeWidth: 7}} />
      </g>
      {/* negative mood graph */}
      <g transform="matrix(1 0 0 -1 0 351)">
        <polyline points={data.negPoints} style={{fill: "none", opacity: 1, stroke: "#1f1f1f", strokeWidth: 5}} />
        <polyline points={data.negPoints} style={{fill: "#1f1f1f", opacity: .03, stroke: "#1f1f1f", strokeWidth: 5}} />
      </g>
     
    </svg>
    </>
  )
}

export default WorldGraph;
