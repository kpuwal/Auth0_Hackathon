const bgBar = "#f1f1f1";
const bar = "#1f1f1f";
const width = 20;
const height = 90;

interface Ibar {
  mood: number;
  barX: number;
  valX: number;
}

const Bar = ({mood, barX, valX}: Ibar) => {
  return (
    <>
      <g transform="matrix(1 0 0 -1 200 110)">
        {/* background bar */}
        <rect x={barX} y={0} width={width} height={height} fill={bgBar} rx="3" ry="3" />
          
        {/* main bar */}
        <rect x={barX} y={0} width={width} height={!isNaN(mood) ? mood * 0.9 : 0} rx="3" ry="3" fill={bar} />
      </g>
      <g>
        {/* mood percentage value */}
        <text className="mood-value" x={valX} y={!isNaN(mood) ? 95 - mood : -10} alignmentBaseline="middle" >{mood}%</text>
      </g>
    </>
  )
}

export default Bar;