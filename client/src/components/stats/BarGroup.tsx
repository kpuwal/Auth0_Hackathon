import { countryProp } from '../../redux/types';
import { HappyIcn, NeutralIcn, NegativeIcn } from './Icons';

const BarGroup = ({ moods, country, sum }: countryProp) => {
  return (
    <>
    <svg width={250} height={200} viewBox={`0 0 200 160`} style={{ }}>
      <g transform="matrix(1 0 0 -1 100 100)">
        <rect x={-70} y={0} width={20} height={90} fill="#f1f1f1" rx="3" ry="3" />
        <rect x={-45} y={0} width={20} height={90} fill="#f1f1f1" rx="3" ry="3" />
        <rect x={-20} y={0} width={20} height={90} fill="#f1f1f1" rx="3" ry="3" />
        <rect x={-70} y={0} width={20} height={!isNaN(moods.positive) ? moods.positive * 0.9 : 0} rx="3" ry="3" fill="#1f1f1f" />
        <rect x={-45} y={0} width={20} height={!isNaN(moods.neutral) ? moods.neutral * 0.9 : 0} rx="3" ry="3" fill="#1f1f1f" />
        <rect x={-20} y={0} width={20} height={!isNaN(moods.negative) ? moods.negative * 0.9 : 0} rx="3" ry="3" fill="#1f1f1f" />
      </g>
      <g>
        <text className="mood-label" x="31px" y={!isNaN(moods.positive) ? 95 - moods.positive : -10} alignmentBaseline="middle" >{moods.positive}%</text>
      </g>
      <g>
        <text className="mood-label" x="56px" y={!isNaN(moods.neutral) ? 95 - moods.neutral : -10} alignmentBaseline="middle" >{moods.neutral}%</text>
      </g>
      <g>
        <text className="mood-label" x="81px" y={!isNaN(moods.negative) ? 95 - moods.negative : -10} alignmentBaseline="middle" >{moods.negative}%</text>
      </g>
      <g>
        <text className="name-label" x="0px" y="5px" alignmentBaseline="middle" >{country}</text>
      </g>
      <g>
        <text className="name-label" x="0px" y="130px" alignmentBaseline="middle">no of headlines analysed: </text>
      </g>
      <g>
        <text className="name-label-bold" x="100px" y="130px" alignmentBaseline="middle">{" "}{sum}</text>
      </g>
      <HappyIcn scale={0.6} posX={32} posY={103} opacity={1} />
      <NeutralIcn scale={0.6} posX={58} posY={103} opacity={1} />
      <NegativeIcn scale={0.6} posX={83} posY={103} opacity={1} />
    </svg>
  </>
  )
}

export default BarGroup;