import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { prepData } from './helper';
import GraphGrid from './GraphGrid';
import GraphLegend from './GraphLegend';
import GraphPolyline from './GraphPolyline';
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
    </svg>
    </>
  )
}

export default WorldGraph;
