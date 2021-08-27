import { HappyIcn, NeutralIcn, NegativeIcn } from '../Icons';

const gap: number = 150;
const gap2x: number = gap * 2;
const x: number = 10;

interface Idescription {
  start: number;
  end: number;
  opacity: number;
  strokeWidth: string;
  mood: string;
}

const GraphLegend = () => {
  return (
    <svg width="550px" height="50px" viewBox={`0 -30 940 40`}>
      <g>
        <HappyIcn scale={1.4} posX={x} posY={0} />
        <Description start={x + 45} end={135} opacity={.2} strokeWidth={"5px"} mood={"positive"} />
      </g>
      <g>
        <NeutralIcn scale={1.4} posX={x + gap} posY={0} />
        <Description start={x + 45 + gap} end={135 + gap} opacity={.4} strokeWidth={"7px"} mood={"neutral"} />
      </g>
      <g>
        <NegativeIcn scale={1.4} posX={x + gap2x} posY={0} />
        <Description start={x + 45 + gap2x} end={135 + gap2x} opacity={1} strokeWidth={"5px"} mood={"negative"} />
      </g>
    </svg>
  )
}

const Description = ({start, end, opacity, strokeWidth, mood}: Idescription) => {
  return (
    <g>
      <line
        x1={start} y1={10}
        x2={end} y2={10}
        style={{
          stroke: "#1f1f1f",
          strokeWidth: `${strokeWidth}`,
          opacity
        }}
      />
      <text
        x={start} y={25}
        alignmentBaseline="middle"
      >
        {mood}
      </text>
    </g>
  )
}

export default GraphLegend;
