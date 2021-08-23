import { HappyIcn, NeutralIcn, NegativeIcn, SpeechBubble } from './Icons';

const rectBg = "#fff";
const lineStroke= "#a9a9a9";

export const renderMaxIcon = (
  name: string,
  scale: number,
  posX: number,
  posY: number,
  txt: number,
  key?: number,
  style?: string) => {

    switch (name) {
      case "positive":
        return (
          <svg key={key} className={style}>
            <g>
              <rect x={posX} y={0} width={40} height={350} fill={rectBg} />
              <line x1={posX + 19} y1={posY} x2={posX+ 19} y2={360} style={{stroke: `${lineStroke}`, strokeWidth: "2px"}} />
              <HappyIcn {...{scale, posX, posY}} />
              <SpeechBubble {...{scale, posX, posY}} />
              <text className="speech-bubble-graph-txt" x={posX + 38} y={posY - 10}>{txt}</text>
            </g>
          </svg>
        )
      case "neutral":
        return (
          <svg key={key} className={style}>
            <g>
              <rect x={posX} y={0} width={40} height={350} fill={rectBg} />
              <line x1={posX + 19} y1={posY} x2={posX+ 19} y2={360} style={{stroke: `${lineStroke}`, strokeWidth: "2px"}} />
              <NeutralIcn {...{scale, posX, posY}} />
              <SpeechBubble {...{scale, posX, posY}} />
              <text className="speech-bubble-graph-txt" x={posX + 38} y={posY - 10}>{txt}</text>
            </g>
          </svg>
        )
      case "negative":
        return (
          <svg key={key} className={style}>
            <g>
              <rect x={posX} y={0} width={40} height={350} fill={rectBg} />
              <line x1={posX + 19} y1={posY} x2={posX+ 19} y2={360} style={{stroke: `${lineStroke}`, strokeWidth: "2px"}} />
              <NegativeIcn {...{scale, posX, posY}} />
              <SpeechBubble {...{scale, posX, posY}} />
              <text className="speech-bubble-graph-txt" x={posX + 38} y={posY - 10}>{txt}</text>
            </g>
          </svg>
        )
      default:
        return <g></g>
    }
}