import { HappyIcn, NeutralIcn, NegativeIcn } from './Icons';
import Bar from './chart/Bar';

const posX = 10;

interface IbarGroup {
  moods: { 
    positive: number,
    neutral: number,
    negative: number, 
  },
  label: string,
  sum: number,
}

const BarGroup = ({ moods, label, sum }: IbarGroup) => {
  return (
    <svg width={300} height={210} viewBox={`0 0 200 170`}>
      {/* positive */}
      <Bar mood={moods.positive} barX={-70} valX={131} />
      <HappyIcn scale={0.6} posX={132} posY={113} />

      {/* neutral */}
      <Bar mood={moods.neutral} barX={-45} valX={156} />
      <NeutralIcn scale={0.6} posX={158} posY={113} />

      {/* negative */}
      <Bar mood={moods.negative} barX={-20} valX={181} />
      <NegativeIcn scale={0.6} posX={183} posY={113} />

      <g>
        <text className="name-label-bold" x={posX} y={posX}alignmentBaseline="middle">{label}</text>
        <text className="name-label" x={posX} y={50} alignmentBaseline="middle">number of headlines </text>
        <text className="name-label" x={posX} y={60} alignmentBaseline="middle">analysed: </text>
        <text className="name-label-bold" x={posX + 38} y={62} alignmentBaseline="middle">{sum}</text>
        <text className="name-label" x={posX} y={80} alignmentBaseline="middle">dominant mood: </text>
      </g>
    </svg>
  )
}

export default BarGroup;