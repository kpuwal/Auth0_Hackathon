const bgBar: string = "#f1f1f1";
const bar: string = "#1f1f1f";
const width: number = 20;
const height: number = 90;

interface Ibar {
  mood: number;
  barX: number;
  valX: number;
  dominant: string;
  id: string;
}

const Bar = ({mood, barX, valX, dominant, id}: Ibar) => {
  const barOp = id === dominant ? 1 : .4;
  return (
    <svg className="bar">
      <g transform="matrix(1 0 0 -1 200 110)">
        {/* background bar */}
        <rect x={barX} y={0} width={width} height={height} fill={bgBar} rx="3" ry="3" />
          
        {/* main bar */}
        <rect x={barX} y={0} width={width} height={!isNaN(mood) ? mood * 0.9 : 0} rx="3" ry="3" fill={bar} opacity={barOp} />
      </g>
      <g>
        {/* mood percentage value */}
        <text x={valX} y={!isNaN(mood) ? 105 - mood : -10} alignmentBaseline="middle" opacity={barOp}>{mood}%</text>
      </g>
    </svg>
  )
}

export default Bar;