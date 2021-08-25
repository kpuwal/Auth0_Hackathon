const bgBar: string = "#f1f1f1";
const bar: string = "#1f1f1f";
const bar2: string = "#787878";
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
        {/* css triggered mood percentage value */}
        <text className="bar-text-rounded-val" fill={id === dominant ? bar : bar2} x={valX + 1} y={!isNaN(mood) ? 100 - mood : -10} alignmentBaseline="middle" opacity={barOp}>{roundValues(mood)}</text>
        
        <text className="bar-text-rounded-val-label" fill={id === dominant ? bar : bar2} x={valX} y={!isNaN(mood) ? 108 - mood : -10} alignmentBaseline="middle" opacity={barOp}>PERCENT</text>
      </g>
      <g>
        {/* mood percentage value */}
        <text className="bar-text-val" x={valX} y={!isNaN(mood) ? 105 - mood : -10} alignmentBaseline="middle" opacity={barOp}>{mood}%</text>
      </g>
    </svg>
  )
}

const roundValues = (val: number) => {
  const rounded = isNaN(val) ? 0 : Math.round(val);
  return rounded;
}

export default Bar;