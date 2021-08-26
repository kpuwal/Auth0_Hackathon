import GraphGrid from './graph/GraphGrid';
import GraphLegend from './graph/GraphLegend';
import GraphPolyline from './graph/GraphPolyline';
import MaxIconGrid from './graph/MaxIconGrid';
import SummaryMessage from './graph/SummaryMessage';
import PresenterIcon from './graph/PresenterIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import '../../css/worldgraph.css';

const WorldGraph = () => {
  const data = useSelector((state: RootState) => state.stats.byDates);
console.log(data)
  return (
    <>
    <GraphLegend />
    <svg width="800px" height="200px" viewBox={`230 0 940 400`}>
      <MaxIconGrid
        max={data.max}
        main={data.main}
        second={data.second}
        third={data.third} />
      <GraphGrid />

      {/* positive mood graph */}
      <GraphPolyline
        transformY={340}
        points={data.posPoints}
        opacityLine={.2}
        strokeWidth={5}
      />

      {/* neutral mood graph */}
      <GraphPolyline
        transformY={346}
        points={data.neuPoints}
        opacityLine={.4}
        strokeWidth={7}
      />

      {/* negative mood graph */}
      <GraphPolyline
        transformY={351}
        points={data.negPoints}
        opacityLine={1}
        strokeWidth={5}
      />

      <SummaryMessage maxMood={data.main} />
      <PresenterIcon />
    </svg>
    </>
  )
}

export default WorldGraph;
