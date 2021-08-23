import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { prepData } from './helper';
import { renderMaxIcon } from './svgHelper';
import GraphGrid from './GraphGrid';
import '../../css/worldgraph.css';

const WorldGraph = () => {
  const dates = useSelector((state: RootState) => state.stats.byDates);
  const data = prepData(dates);

  return (
    <svg width="550px" height="200px" viewBox={`-20 0 940 400`}>
      <GraphGrid />
      {
        data.max.map((item, idx) => renderMaxIcon(item.mood || "empty", 1.6, item.posX || 0, item.posY || 0, item.txtVal, idx, false))
      }
       {
        renderMaxIcon(data.maxMain.mood || "empty", 1.6, data.maxMain.posX || 0, data.maxMain.posY || 0,data.maxMain.txtVal, 0, true)
      }
      {/* positive mood graph */}
      <g transform="matrix(1 0 0 -1 10 340)">
        <polyline points={data.posPoints} style={{fill: "none", opacity: .2, stroke: "#1f1f1f", strokeWidth: 5}} />
      </g>
      {/* neutral mood graph */}
      <g transform="matrix(1 0 0 -1 0 345)">
        <polyline points={data.neuPoints} style={{fill: "none", opacity: .4, stroke: "#1f1f1f", strokeWidth: 5}} />
      </g>
      {/* negative mood graph */}
      <g transform="matrix(1 0 0 -1 0 350)">
        <polyline points={data.negPoints} style={{fill: "none", opacity: 1, stroke: "#1f1f1f", strokeWidth: 5}} />
      </g>
     
    </svg>
  )
}

export default WorldGraph;
