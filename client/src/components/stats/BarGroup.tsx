import { countryProp } from '../../redux/types';

const BarGroup = ({ moods, country, sum }: countryProp) => {
  return (
    <svg>
      <g className="bar-group">
        <text className="name-label" x="6px" y="10px" alignmentBaseline="middle" >{country}</text>
        <rect x={0} y={10} width={10} height={moods.positive} fill="#1f1f1f" />
        <rect x={20} y={10} width={10} height={moods.neutral} fill="green" />
        <rect x={40} y={10} width={10} height={moods.negative} fill="red" />
       <text className="value-label" x={20- 8} y="10px" alignmentBaseline="middle" >30</text>
    </g>
  </svg>
  )
}

export default BarGroup;