import GraphGrid from './graph/GraphGrid';
import GraphLegend from './graph/GraphLegend';
import GraphPolyline from './graph/GraphPolyline';
import MaxIconGrid from './graph/MaxIconGrid';
import SummaryMessage from './graph/SummaryMessage';
import PresenterIcon from './graph/PresenterIcon';
import SummaryWorld from './graph/SummaryWorld';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import '../../css/worldgraph.css';

const posY: number = 340;

const WorldGraph = () => {
  const data = useSelector((state: RootState) => state.stats.byDates);
console.log(data)
  return (
    <>
      <h2 style={{paddingLeft: "2vh"}}>world mood graph</h2>
      <p
        style={{
          paddingLeft: "2vh",
          paddingBottom: "30px",
          fontSize: "12px"
        }}
      >
        number of analysed headers per month dictates current emotional trend
      </p>
      <svg width="650px" height="200px" viewBox={`160 0 840 400`}>
        <MaxIconGrid
          max={data.max}
          main={data.main}
          second={data.second}
          third={data.third} />
        <GraphGrid />

        {/* positive mood graph */}
        <GraphPolyline
          transformY={posY}
          points={data.posPoints}
          opacityLine={.2}
          strokeWidth={5}
        />

        {/* neutral mood graph */}
        <GraphPolyline
          transformY={posY + 6}
          points={data.neuPoints}
          opacityLine={.4}
          strokeWidth={7}
        />

        {/* negative mood graph */}
        <GraphPolyline
          transformY={posY + 12}
          points={data.negPoints}
          opacityLine={1}
          strokeWidth={5}
        />

        <SummaryMessage
          name={data.totalWorldMood.name}
          data={data.totalWorldMood.data}
        />
        <PresenterIcon />
      </svg>
      <GraphLegend />
      <SummaryWorld
        best={data.totalWorldMood.best}
        worst={data.totalWorldMood.worst}
      />
    </>
  )
}

export default WorldGraph;
