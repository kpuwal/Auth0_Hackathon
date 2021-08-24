import { HappyIcn, NeutralIcn, NegativeIcn } from './Icons';
import Bar from './chart/Bar';

const posX: number = 35;
const posY: number = 25;

interface IbarGroup {
  moods: { 
    positive: number,
    neutral: number,
    negative: number, 
  },
  label: string,
  sum: number,
  dominant: {mood: string, count: number}
}

const BarGroup = ({ moods, label, sum, dominant }: IbarGroup) => {
  return (
    <svg width={300} height={210} viewBox={`0 0 200 170`}>
      {/* positive */}
      <Bar id="positive" mood={moods.positive} barX={-70} valX={131} dominant={dominant.mood} />
      <HappyIcn scale={0.6} posX={132} posY={113} />

      {/* neutral */}
      <Bar id="neutral" mood={moods.neutral} barX={-45} valX={156} dominant={dominant.mood} />
      <NeutralIcn scale={0.6} posX={158} posY={113} />

      {/* negative */}
      <Bar id="negative" mood={moods.negative} barX={-20} valX={181} dominant={dominant.mood} />
      <NegativeIcn scale={0.6} posX={183} posY={113} />

      <g>
        <text className="name-label-bold" x={posX} y={5}alignmentBaseline="middle">{label}</text>
        <text className="name-label" x={posX} y={posY} alignmentBaseline="middle">number of headlines </text>

        <text className="name-label" x={posX} y={posY + 10}alignmentBaseline="middle">analysed: </text>
        <text className="name-label-bold" x={posX + 38} y={posY + 12} alignmentBaseline="middle">{sum}</text>

        <text className="name-label" x={posX} y={posY + 30} alignmentBaseline="middle">dominant mood:</text>
        <text className="name-label-bold" x={posX} y={posY + 45} alignmentBaseline="middle">{dominant.mood}</text>
      </g>
    </svg>
  )
}

export default BarGroup;