const posX: number = 990;
const posY: number = 40;

interface IsummaryMessage {
  name: string;
  data: number;
}

const SummaryMessage = ({name, data}: IsummaryMessage) => {
  switch (name) {
    case "positive":
      return (
        <g>
          <MainBubble
            exclamation={"HURRAY!"}
            headersNo={data}
            moodName={name}
          />
          <MoodBubble mood={"P O S I T I V E"} />
        </g>
      )
    case "neutral":
      return (
        <g>
          <MainBubble
            exclamation={"WELL..."}
            headersNo={data}
            moodName={name}
          />
          <MoodBubble mood={"N E U T R A L"} />
        </g>
      )
    case "negative":
      return (
        <g>
          <MainBubble
            exclamation={"WARNING!"}
            headersNo={data}
            moodName={name}
          />
          <MoodBubble mood={"N E G A T I V E"} />
        </g>
      )
    default:
      return (
        <g>
          {/* <MainBubble
            exclamation={"!"}
            headersNo={data}
            moodName={name}
          />
          <MoodBubble mood={"NO NEWS YET"} /> */}
        </g>
      )
  }
}

type MainBubbleProps = {exclamation: string, headersNo: number, moodName: string};

const MainBubble = ({exclamation, headersNo, moodName}: MainBubbleProps) => {
  return (
    <>
      <rect 
        x={posX - 15} y={0}
        rx={10} ry={10}
        width={250} height={170}
        fill="#f1f1f1" 
          opacity={1}
        />
      <polyline
        points={`${posX + 175},${posY + 120} ${posX + 175},${posY + 180} ${posX + 210},${posY + 120}`}
        fill="#f1f1f1"
      />
      <text
        alignmentBaseline="middle"
        fill="#1f1f1f"
        style={{fontSize: "24px"}}
      >
        <tspan x={posX + 10} y={posY} style={{fontWeight: "bold"}}>
          {exclamation}
        </tspan>
        <tspan x={posX + 10} y={posY + 35}>with {headersNo} of total</tspan>
        <tspan x={posX + 10} y={posY + 65}>{moodName} headers</tspan>
        <tspan x={posX + 10} y={posY + 95}>the world mood is</tspan>
      </text>
    </>
  )
}

type MoodBubbleProps = {mood: string};

const MoodBubble = ({mood}: MoodBubbleProps) => {
  return (
    <>
      <rect 
        x={posX - 45} y={posY + 115}
        rx={5} ry={5}
        width={190} height={40}
        fill="#1f1f1f" 
        opacity={1}
      />
      <polyline
        points={`${posX + 120},180 ${posX + 120},230 ${posX + 80},180`} fill="#1f1f1f"
      />
      <text
        x={posX - 30} y={184} 
        style={{fontWeight: "bold", fontSize: "24px"}}
        fill="#f1f1f1"
      >
        {mood}
      </text>
    </>
  )
}

export default SummaryMessage;