import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { prepData } from './helper';
import GraphGrid from './GraphGrid';
import GraphLegend from './GraphLegend';
import MaxIconGrid from './MaxIconGrid';
import '../../css/worldgraph.css';

const WorldGraph = () => {
  const dates = useSelector((state: RootState) => state.stats.byDates);
  const data = prepData(dates);

  return (
    <>
    <GraphLegend />
    <svg width="550px" height="200px" viewBox={`-20 0 940 400`}>
      <MaxIconGrid
        max={data.max}
        main={data.main}
        second={data.second}
        third={data.third} />
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
