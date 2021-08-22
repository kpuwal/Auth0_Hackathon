import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { prepData } from './helper';

const WorldGraph = () => {
  const dates = useSelector((state: RootState) => state.stats.byDates);
  const positives = dates.map(a => a.positive);
  const neutrals = dates.map(a => a.neutral);
  const negatives = dates.map(a => a.negative);
  // const stamps = dates.map(a => a.stamp);

  const newData = prepData(dates)
  console.log(newData)

  const calculatePoints = (data: number[]) => {
    let collection: any = [];
    data.forEach((item, idx) => {
      collection.push(`${80 * idx}, ${item} `)
    })
    return collection.join(" ");
  }

  const posPoints = calculatePoints(positives);
  const neuPoints = calculatePoints(neutrals);
  const negPoints = calculatePoints(negatives);

  return (
    <svg height="200" width="700" viewBox={`0 0 50 300`}>
      <g transform="matrix(1 0 0 -1 -400 250)">
        <polyline points={posPoints} style={{fill: "none", opacity: .5, stroke: "black", strokeWidth: 5}} />
      </g>
      <g transform="matrix(1 0 0 -1 -400 255)">
        <polyline points={neuPoints} style={{fill: "none", opacity: .3, stroke: "green", strokeWidth: 5}} />
      </g>
      <g transform="matrix(1 0 0 -1 -400 260)">
        <polyline points={negPoints} style={{fill: "none", opacity: .5, stroke: "grey", strokeWidth: 5}} />
      </g>
    </svg>
  )
}

export default WorldGraph;
