import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { prepData } from './helper';
import { HappyIcn, NeutralIcn, NegativeIcn } from './Icons';
import GraphGrid from './GraphGrid';

const renderMaxIcon = (name: string, scale: number, posX: number, posY: number, opacity: number, key?: number) => {
  switch (name) {
    case "positive":
      return <HappyIcn key={key} {...{scale, posX, posY, opacity}} />
    case "neutral":
      return <NeutralIcn key={key} {...{scale, posX, posY, opacity}} />
    case "negative":
      return <NegativeIcn key={key} {...{scale, posX, posY, opacity}} />
    default:
      return <g></g>
  }
}

const WorldGraph = () => {
  const dates = useSelector((state: RootState) => state.stats.byDates);
  const data = prepData(dates);

  const peak = Math.max.apply(Math, data.max.map(obj => {return obj.posY}));const maxNo = data.max.find(obj => {return obj.posY === peak});

  console.log(data.max)

  return (
    <svg width="100%" height="200px" viewBox={`0 0 900 400`}>
      <GraphGrid />
      <g transform="matrix(1 0 0 -1 0 340)">
        <polyline points={data.posPoints} style={{fill: "none", opacity: .2, stroke: "#1f1f1f", strokeWidth: 5}} />
      </g>
      <g transform="matrix(1 0 0 -1 0 345)">
        <polyline points={data.neuPoints} style={{fill: "none", opacity: 1, stroke: "#1f1f1f", strokeWidth: 5}} />
      </g>
      <g transform="matrix(1 0 0 -1 0 350)">
        <polyline points={data.negPoints} style={{fill: "none", opacity: .4, stroke: "#1f1f1f", strokeWidth: 5}} />
      </g>
      {data.max.map((item, idx) => renderMaxIcon(item.mood || "empty", 1.6, item.posX || 0, item.posY || 0, .3, idx))}
      {
        renderMaxIcon(maxNo?.mood || "empty", 1.6, maxNo?.posX || 0, maxNo?.posY || 0, 1)
      }
    </svg>
  )
}

export default WorldGraph;
