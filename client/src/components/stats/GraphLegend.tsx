import { HappyIcn, NeutralIcn, NegativeIcn } from './Icons';

const gap = 150;
const gap2x = gap * 2;

interface Idescription {
  start: number;
  end: number;
  opacity: number;
  strokeWidth: string;
  mood: string;
}

const Description = ({start, end, opacity, strokeWidth, mood}: Idescription) => {
  return (
    <g>
      <line x1={start} y1={10} x2={end} y2={10} style={{stroke: "#1f1f1f", strokeWidth: `${strokeWidth}`, opacity}} />
      <text x={start} y={25} alignmentBaseline="middle" >{mood}</text>
    </g>
  )
}

const GraphLegend = () => {
  return (
    <svg width="550px" height="50px" viewBox={`0 0 940 40`}>
      <g>
        <HappyIcn scale={1.4} posX={40} posY={0} />
        <Description start={85} end={135} opacity={.2} strokeWidth={"5px"} mood={"positive"} />
      </g>
      <g>
        <NeutralIcn scale={1.4} posX={40 + gap} posY={0} />
        <Description start={85 + gap} end={135 + gap} opacity={.4} strokeWidth={"7px"} mood={"neutral"} />
      </g>
      <g>
        <NegativeIcn scale={1.4} posX={40 + gap2x} posY={0} />
        <Description start={85 + gap2x} end={135 + gap2x} opacity={1} strokeWidth={"5px"} mood={"negative"} />
      </g>
    </svg>
  )
}

export default GraphLegend;
