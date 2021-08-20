import { countryProp } from '../../redux/types';

const BarGroup = ({ moods, country, sum }: countryProp) => {
  return (
    <>
    <svg width={250} height={200} viewBox="0 0 100 160">
      <g transform="matrix(1 0 0 -1 100 100)">
        <rect x={-70} y={0} width={20} height={90} fill="#f1f1f1" rx="3" ry="3" />
        <rect x={-45} y={0} width={20} height={90} fill="#f1f1f1" rx="3" ry="3" />
        <rect x={-20} y={0} width={20} height={90} fill="#f1f1f1" rx="3" ry="3" />
        <rect x={-70} y={0} width={20} height={moods.positive} rx="3" ry="3" fill="#1f1f1f" />
        <rect x={-45} y={0} width={20} height={moods.neutral} rx="3" ry="3" fill="#1f1f1f" />
        <rect x={-20} y={0} width={20} height={moods.negative} rx="3" ry="3" fill="#1f1f1f" />
      </g>
      <g>
        <text className="mood-label" x="31px" y={95 - moods.positive} alignmentBaseline="middle" >{moods.positive}%</text>
      </g>
      <g>
        <text className="mood-label" x="56px" y={95 - moods.neutral} alignmentBaseline="middle" >{moods.neutral}%</text>
      </g>
      <g>
        <text className="mood-label" x="81px" y={95 - moods.negative} alignmentBaseline="middle" >{moods.negative}%</text>
      </g>
      <g>
        <text className="name-label" x="0px" y="10px" alignmentBaseline="middle" >{country}</text>
      </g>
      <g>
        <text className="name-label" x="0px" y="130px" alignmentBaseline="middle">number of headlines: </text>
      </g>
      <g>
        <text className="name-label-bold" x="100px" y="130px" alignmentBaseline="middle">{ }{sum}</text>
      </g>
    </svg>
    <svg 
      className="emoji-label" 
      height="20px"
      width="20px"
      viewBox="0 0 24 24" 
      fill="#000000">
      <g>
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <circle cx="15.5" cy="9.5" r="1.5"/>
        <circle cx="8.5" cy="9.5" r="1.5"/>
        <path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      </g>
    </svg>
  </>
  )
}

export default BarGroup;