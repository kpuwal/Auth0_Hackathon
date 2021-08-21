import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
// import { dateProp } from '../../redux/types';

const WorldGraph = () => {
  const dates = useSelector((state: RootState) => state.stats.byDates);
  const positives = dates.map(a => a.positive);
  const neutrals = dates.map(a => a.neutral);
  const negatives = dates.map(a => a.negative);
  const stamps = dates.map(a => a.stamp);

  return <div>world graph</div>
}

export default WorldGraph;
