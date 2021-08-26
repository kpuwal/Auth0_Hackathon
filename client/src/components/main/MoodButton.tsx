import '../../css/moodbar.css'

const activeCol: string = "#1f1f1f";
const inactiveCol: string = "#ffffff";

interface ImoodIcon {
  children: React.ReactNode;
  txt: string;
  badgeVal: number;
  color: number;
}

const MoodButton = ({children, txt, badgeVal, color}: ImoodIcon) => {
  return (
    <svg x={0} y={0} width={70} height="70px" viewBox="0 0 70 70" opacity={color}>
      <SpeechBubble {...{txt}} />
      <g>
        {children}
      </g>
      <Badge {...{badgeVal}} />
    </svg>
  )
}

type SpeechBubbleProps = {txt: string};

const SpeechBubble = ({txt}: SpeechBubbleProps) => {
  return (
    <g>
      <rect
        x={0} y={0}
        width="60px"
        height="18px"
        fill={activeCol}
      />
      <polyline 
        points="45,10 45,28 60,10 45,10"
        fill={activeCol}
      />
      <text
        x={11} y={9}
        alignmentBaseline="middle"
        className="mood-label"
        style={{fontSize: "9px"}}>
          {txt}
      </text>
    </g>
  )
}

type BadgeProps = {badgeVal: number};

const Badge = ({badgeVal}: BadgeProps) => {
  return (
    <g>
		  <text
        x={12} y={28}
        alignmentBaseline="middle"
        fill={badgeVal !== 0 ? activeCol : inactiveCol}
        className="badge" >
          {badgeVal}
      </text>
	  </g>
  )
}

export default MoodButton;
