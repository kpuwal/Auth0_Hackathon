import { maxProp } from '../../../redux/types';

const posX: number = 950;

interface IsummaryMessage {
  maxMood: maxProp;
}

const SummaryMessage = ({maxMood}: IsummaryMessage) => {
  switch (maxMood.mood) {
    case "positive":
      return (
        <g>
          <MainBubble exclamation={"HURRAY!"} />
          <MoodBubble mood={"P O S I T I V E"} />
        </g>
      )
    case "neutral":
      return (
        <g>
          <MainBubble exclamation={"WELL..."} />
          <MoodBubble mood={"N E U T R A L"} />
        </g>
      )
    case "negative":
      return (
        <g>
          <MainBubble exclamation={"WARNING!"} />
          <MoodBubble mood={"N E G A T I V E"} />
        </g>
      )
    default:
      return (
        <g>
          <MainBubble exclamation={"!"} />
          <MoodBubble mood={"NO NEWS YET"} />
        </g>
      )
  }
}

type MainBubbleProps = {exclamation: string};

const MainBubble = ({exclamation}: MainBubbleProps) => {
  return (
    <>
      <rect 
        x={posX - 15} y={15}
        rx={10} ry={10}
        width={250} height={130}
        fill="#f1f1f1" 
          opacity={1}
        />
      <polyline
        points={`${posX + 175},140 ${posX + 175},200 ${posX + 210},140`}
        fill="#f1f1f1"
      />
      <text
        x={posX} y={35}
        alignmentBaseline="middle"
        fill="#1f1f1f"
        style={{fontSize: "24px"}}
      >
        <tspan x={posX} y={50} style={{fontWeight: "bold"}}>
          {exclamation}
        </tspan>
        <tspan x={posX} y={85}>current mood trend</tspan>
        <tspan x={posX} y={115}>in the world news is</tspan>
      </text>
    </>
  )
}

type MoodBubbleProps = {mood: string};

const MoodBubble = ({mood}: MoodBubbleProps) => {
  return (
    <>
      <rect 
        x={posX - 45} y={135}
        rx={5} ry={5}
        width={190} height={40}
        fill="#1f1f1f" 
        opacity={1}
      />
      <polyline
        points={`${posX + 120},150 ${posX + 120},200 ${posX + 80},150`} fill="#1f1f1f"
      />
      <text
        x={posX - 30} y={164} 
        style={{fontWeight: "bold", fontSize: "24px"}}
        fill="#f1f1f1"
      >
        {mood}
      </text>
    </>
  )
}

export default SummaryMessage;