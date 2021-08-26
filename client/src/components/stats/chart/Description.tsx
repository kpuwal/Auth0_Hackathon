const posX: number = 35;
const posY: number = 25;

interface Idescription {
  label: string,
  sum: number,
  dominant: {mood: string, count: number}
}

const Description = ({label, sum, dominant}: Idescription) => {
  return (
    <g>
      <text className="name-label-bold" x={posX} y={5}alignmentBaseline="middle">{label}</text>

      <line x1={posX - 8} y1={13} x2={250} y2={13} style={{stroke: "#1f1f1f", strokeWidth: .5}} opacity={.2} />
      <circle cx={221} cy={13} r={1.5} stroke="#e9e5dd" strokeWidth={.7} fill="#ffffff" />

      <text className="name-label" x={posX} y={posY} alignmentBaseline="middle">number of headlines </text>

      <text className="name-label" x={posX} y={posY + 10}alignmentBaseline="middle">analysed: </text>
      <text className="name-label-bold" x={posX + 38} y={posY + 12} alignmentBaseline="middle">{sum}</text>

      <text className="name-label" x={posX} y={posY + 40} alignmentBaseline="middle">dominant mood:</text>
      <text className="name-label-bold-big" x={posX} y={posY + 55} alignmentBaseline="middle">{dominant.mood}</text>
    </g>
  )
}

export default Description;
