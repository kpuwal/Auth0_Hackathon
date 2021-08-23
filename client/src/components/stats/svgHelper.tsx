import { HappyIcn, NeutralIcn, NegativeIcn, SpeechBubble } from './Icons';

export const renderMaxIcon = (
  name: string,
  scale: number,
  posX: number,
  posY: number,
  key?: number) => {

    switch (name) {
      case "positive":
        return (
          <g key={key}>
            <HappyIcn {...{scale, posX, posY}} />
            <SpeechBubble {...{scale, posX, posY}} />
            <text className="speech-bubble-graph-txt" x={posX + 38} y={posY - 10}>{290 - posY}</text>
          </g>
        )
      case "neutral":
        return (
          <g key={key}>
            <NeutralIcn {...{scale, posX, posY}} />
            <SpeechBubble {...{scale, posX, posY}} />
            <text className="speech-bubble-graph-txt" x={posX + 38} y={posY - 10}>{290 - posY}</text>
          </g>
        )
      case "negative":
        return (
          <g key={key}>
            <NegativeIcn {...{scale, posX, posY}} />
            <SpeechBubble {...{scale, posX, posY}} />
            <text className="speech-bubble-graph-txt" x={posX + 38} y={posY - 10}>{290 - posY}</text>
          </g>
        )
      default:
        return <g></g>
    }
}