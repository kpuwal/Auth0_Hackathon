import { HappyIcn, NeutralIcn, NegativeIcn, SpeechBubble } from '../Icons';

const rectBg: string = "#ffffff";
const lineStroke: string = "#a9a9a9";
const iconSize: number = 1.6;

export interface ImaxIcon {
  name: string;
  posX: number;
  posY: number;
  txt: number;
  maxStyle?: string;
}

const MaxIcon = ({name, posX, posY, txt, maxStyle}: ImaxIcon) => {
    switch (name) {
      case "positive":
        return (
          <svg className={maxStyle}>
            <g>
              <rect x={posX} y={0} width={40} height={350} fill={rectBg} />
              <line x1={posX + 19} y1={posY} x2={posX+ 19} y2={360} style={{stroke: `${lineStroke}`, strokeWidth: "2px"}} />

              <HappyIcn scale={iconSize} {...{posX, posY}} />
              <SpeechBubble scale={iconSize} {...{posX, posY}} />
              
              <text className="speech-bubble-graph-txt" x={posX + 38} y={posY - 10}>{txt}</text>
            </g>
          </svg>
        )
      case "neutral":
        return (
          <svg className={maxStyle}>
            <g>
              <rect x={posX} y={0} width={40} height={350} fill={rectBg} />
              <line x1={posX + 19} y1={posY} x2={posX+ 19} y2={360} style={{stroke: `${lineStroke}`, strokeWidth: "2px"}} />

              <NeutralIcn scale={iconSize} {...{posX, posY}} />
              <SpeechBubble scale={iconSize} {...{posX, posY}} />

              <text className="speech-bubble-graph-txt" x={posX + 38} y={posY - 10}>{txt}</text>
            </g>
          </svg>
        )
      case "negative":
        return (
          <svg className={maxStyle}>
            <g>
              <rect x={posX} y={0} width={40} height={350} fill={rectBg} />
              <line x1={posX + 19} y1={posY} x2={posX+ 19} y2={360} style={{stroke: `${lineStroke}`, strokeWidth: "2px"}} />

              <NegativeIcn scale={iconSize} {...{posX, posY}} />
              <SpeechBubble scale={iconSize} {...{posX, posY}} />
              
              <text className="speech-bubble-graph-txt" x={posX + 38} y={posY - 10}>{txt}</text>
            </g>
          </svg>
        )
      default:
        return <g></g>
    }
}

export default MaxIcon;
