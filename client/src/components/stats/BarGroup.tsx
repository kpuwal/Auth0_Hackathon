import { HappyIcn, NeutralIcn, NegativeIcn } from './Icons';
import Bar from './chart/Bar';
import Description from './chart/Description';
import '../../css/bargroup.css';

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
    <svg width={280} height={210} viewBox={`0 0 220 170`} className="bar-group">
      {/* positive */}
      <Bar id="positive" mood={moods.positive} barX={-60} valX={141} dominant={dominant.mood} />
      <HappyIcn scale={0.6} posX={142} posY={113} opacity={dominant.mood === "positive" ? 1 : .4} />

      {/* neutral */}
      <Bar id="neutral" mood={moods.neutral} barX={-35} valX={166} dominant={dominant.mood} />
      <NeutralIcn scale={0.6} posX={168} posY={113} opacity={dominant.mood === "neutral" ? 1 : .4} />

      {/* negative */}
      <Bar id="negative" mood={moods.negative} barX={-10} valX={191} dominant={dominant.mood} />
      <NegativeIcn scale={0.6} posX={193} posY={113} opacity={dominant.mood === "negative" ? 1 : .4} />

      <Description {...{label, sum, dominant}} />
    </svg>
  )
}

export default BarGroup;