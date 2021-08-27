import GraphGrid from './graph/GraphGrid';
import GraphLegend from './graph/GraphLegend';
import GraphPolyline from './graph/GraphPolyline';
import MaxIconGrid from './graph/MaxIconGrid';
import SummaryMessage from './graph/SummaryMessage';
import PresenterIcon from './graph/PresenterIcon';
import AnalysisSummary from './graph/AnalysisSummary';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import '../../css/worldgraph.css';

const scale = 0;

const WorldGraph = () => {
  const data = useSelector((state: RootState) => state.stats.byDates);
console.log(data)
  return (
    <>
      <h2 style={{paddingLeft: "3vh"}}>world mood graph</h2>
      <p
        style={{
          paddingLeft: "3vh",
          paddingBottom: "30px",
          fontSize: "12px"
        }}
      >
        total number of analysed headers per month dictates current emotional trend
      </p>
      <GraphLegend />
      <svg width="650px" height="200px" viewBox={`160 0 840 400`} style={{background: "pink"}}>
        <MaxIconGrid
          max={data.max}
          main={data.main}
          second={data.second}
          third={data.third} />
        <GraphGrid />

        {/* positive mood graph */}
        <GraphPolyline
          transformY={340 + scale}
          points={data.posPoints}
          opacityLine={.2}
          strokeWidth={5}
        />

        {/* neutral mood graph */}
        <GraphPolyline
          transformY={346 + scale}
          points={data.neuPoints}
          opacityLine={.4}
          strokeWidth={7}
        />

        {/* negative mood graph */}
        <GraphPolyline
          transformY={351 + scale}
          points={data.negPoints}
          opacityLine={1}
          strokeWidth={5}
        />

        <SummaryMessage maxMood={data.main} />
        <PresenterIcon />
      </svg>
      <AnalysisSummary />
    </>
  )
}

export default WorldGraph;
