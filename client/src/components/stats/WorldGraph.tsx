import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { prepData } from './helper';
import { HappyIcn } from './Icons';

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

const positionX = 80;

const WorldGraph = () => {
  const dates = useSelector((state: RootState) => state.stats.byDates);
  const data = prepData(dates);
  console.log(data)

  return (
    <svg width="100%" height="200px" viewBox={`0 0 900 400`}>
      <g>
        {
          MONTHS.map((item, idx) => 
          <g key={idx}>
            <line x1={positionX * idx} y1={30} x2={positionX * idx} y2={370} style={{stroke: "#e9e5dd", opacity: .4, strokeWidth: "2px"}} />
            <line x1={positionX * idx} y1={360} x2={positionX * idx} y2={370} style={{stroke: "#1f1f1f", strokeWidth: "2px"}} />
          </g>)
        }
        <line x1={-20} y1={360} x2={900} y2={360} style={{stroke: "#1f1f1f", strokeWidth: "2px"}} />
        <line x1={0} y1={30} x2={0} y2={370} style={{stroke: "#1f1f1f", strokeWidth: "1px"}} />
      </g>
      <g transform="matrix(1 0 0 -1 0 340)">
        <polyline points={data.posPoints} style={{fill: "none", opacity: .2, stroke: "#1f1f1f", strokeWidth: 5}} />
      </g>
      <g transform="matrix(1 0 0 -1 0 345)">
        <polyline points={data.neuPoints} style={{fill: "none", opacity: 1, stroke: "#1f1f1f", strokeWidth: 5}} />
      </g>
      <g transform="matrix(1 0 0 -1 0 350)">
        <polyline points={data.negPoints} style={{fill: "none", opacity: .4, stroke: "#1f1f1f", strokeWidth: 5}} />
      </g>
      <g>
        {
          MONTHS.map((item, idx) => <text key={idx} x={positionX * idx} y={390} alignmentBaseline="middle" >{item}</text>)
        }
      </g>
      <HappyIcn scale={1.6} posX={88} posY={109} />
    </svg>
  )
}

export default WorldGraph;
