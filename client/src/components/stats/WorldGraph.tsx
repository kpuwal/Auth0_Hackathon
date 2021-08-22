import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { prepData } from './helper';

const MONTHS: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WorldGraph = () => {
  const dates = useSelector((state: RootState) => state.stats.byDates);
  const data = prepData(dates);
  console.log(data)

  return (
    <svg width="100%" height="200px" viewBox={`0 0 900 350`}>
      <g transform="matrix(1 0 0 -1 0 290)">
        <polyline points={data.posPoints} style={{fill: "none", opacity: .2, stroke: "#1f1f1f", strokeWidth: 5}} />
      </g>
      <g transform="matrix(1 0 0 -1 0 295)">
        <polyline points={data.neuPoints} style={{fill: "none", opacity: 1, stroke: "#1f1f1f", strokeWidth: 5}} />
      </g>
      <g transform="matrix(1 0 0 -1 0 300)">
        <polyline points={data.negPoints} style={{fill: "none", opacity: .4, stroke: "#1f1f1f", strokeWidth: 5}} />
      </g>
      <g>
        {
          MONTHS.map((item, idx) => <text x={80 * idx} y={330} alignmentBaseline="middle" >{item}</text>)
        }
      </g>
    </svg>
  )
}

export default WorldGraph;
