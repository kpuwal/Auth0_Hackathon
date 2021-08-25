import { HappyIcn, NeutralIcn, NegativeIcn } from './Icons';
import Bar from './chart/Bar';
import '../../css/bargroup.css';

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
    <svg width={280} height={210} viewBox={`0 0 220 170`}>
      {/* positive */}
      <Bar id="positive" mood={moods.positive} barX={-60} valX={141} dominant={dominant.mood} />
      <HappyIcn scale={0.6} posX={142} posY={113} opacity={dominant.mood === "positive" ? 1 : .4} />

      {/* neutral */}
      <Bar id="neutral" mood={moods.neutral} barX={-35} valX={166} dominant={dominant.mood} />
      <NeutralIcn scale={0.6} posX={168} posY={113} opacity={dominant.mood === "neutral" ? 1 : .4} />

      {/* negative */}
      <Bar id="negative" mood={moods.negative} barX={-10} valX={191} dominant={dominant.mood} />
      <NegativeIcn scale={0.6} posX={193} posY={113} opacity={dominant.mood === "negative" ? 1 : .4} />

      <g>
        <text className="name-label-bold" x={posX} y={5}alignmentBaseline="middle">{label}</text>

        <line x1={posX - 8} y1={13} x2={250} y2={13} style={{stroke: "#1f1f1f", strokeWidth: .5}} opacity={.2} />
        <circle cx={221} cy={13} r={1.5} stroke="#e9e5dd" strokeWidth={.7} fill="#ffffff" />

        <text className="name-label" x={posX} y={posY} alignmentBaseline="middle">number of headlines </text>

        <text className="name-label" x={posX} y={posY + 10}alignmentBaseline="middle">analysed: </text>
        <text className="name-label-bold" x={posX + 38} y={posY + 12} alignmentBaseline="middle">{sum}</text>

        <text className="name-label" x={posX} y={posY + 40} alignmentBaseline="middle">dominant mood:</text>
        <text className="name-label-bold-big" x={posX} y={posY + 55} alignmentBaseline="middle">{dominant.mood}</text>
      </g>
    </svg>
  )
}

export default BarGroup;