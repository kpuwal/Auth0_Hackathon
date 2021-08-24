import { HappyIcn, NeutralIcn, NegativeIcn } from '../Icons';
import Bar from './Bar';

const posX = 35;
const posY = 25;

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
        <text className="name-label-bold" x={posX} y={5}alignmentBaseline="middle">{label}</text>
        <text className="name-label" x={posX} y={posY} alignmentBaseline="middle">number of headlines </text>
        <text className="name-label" x={posX} y={posY + 10} alignmentBaseline="middle">analysed: </text>
        <text className="name-label-bold" x={posX + 38} y={posY + 12} alignmentBaseline="middle">{sum}</text>
        <text className="name-label" x={posX} y={posY + 30} alignmentBaseline="middle">dominant mood: </text>
      </g>
    </svg>
  )
}

export default BarGroup;