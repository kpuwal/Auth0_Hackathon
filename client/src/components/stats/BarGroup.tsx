import { countryProp } from '../../redux/types';

const BarGroup = ({ moods, country, sum }: countryProp) => {
  return (
    <svg width="25%" height="100%" viewBox="0 0 250 150">
      <g transform="matrix(1 0 0 -1 100 100)" className="bar-group">
        <rect x={-80} y={0} width={20} height={moods.positive} fill="#1f1f1f" />
        <rect x={-55} y={0} width={20} height={moods.neutral} fill="green" />
        <rect x={-30} y={0} width={20} height={moods.negative} fill="red" />
      </g>
      <g>
        <text className="name-label" x="0px" y="10px" alignmentBaseline="middle" >{country}</text>
      </g>
      <g><text className="name-label" x="0px" y="130px" alignmentBaseline="middle" >{sum}</text></g>
    </svg>
  )
}

export default BarGroup;