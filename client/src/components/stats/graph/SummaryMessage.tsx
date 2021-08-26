import { maxProp } from '../../../redux/types';

interface IsummaryMessage {
  maxMood: maxProp;
}

const SummaryMessage = ({maxMood}: IsummaryMessage) => {
  switch (maxMood.mood) {
    case "positive":
      return (
        <g>
          <circle cx={1200} cy={50} r={10} fill="pink" />
        </g>
      )
    case "neutral":
      return (
        <g>
          <circle cx={1200} cy={50} r={10} fill="green" />
        </g>
      )
    case "negative":
      return (
        <g>
          <rect 
            x={985} y={15}
            rx={10} ry={10}
            width={250} height={130}
            fill="#f1f1f1" 
            opacity={1}
          />
          <text
            x={1000} y={35}
            alignmentBaseline="middle"
            fill="#1f1f1f"
            style={{fontSize: "24px"}}
          >
            <tspan x={1000} y={50} style={{fontWeight: "bold"}}>WARNING!</tspan>
            <tspan x={1000} y={85}>current mood trend</tspan>
            <tspan x={1000} y={115}>in the news world is</tspan>
          </text>
          <rect 
            x={955} y={135}
            rx={5} ry={5}
            width={190} height={40}
            fill="#1f1f1f" 
            opacity={1}
          />
          <text
            x={970} y={164} 
            style={{fontWeight: "bold", fontSize: "24px"}}
            fill="#f1f1f1"
          >
            N E G A T I V E
          </text>
        </g>
      )
    default:
      return (
        <g>
          <circle cx={1200} cy={50} r={10} fill="black" />
        </g>
      )
  }
}

export default SummaryMessage;