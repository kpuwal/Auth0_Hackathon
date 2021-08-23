const MONTHS: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const positionX = 80;

const GraphGrid = () => {
  return (
    <g>
      {
        MONTHS.map((item, idx) => 
          <g key={idx}>
            <line x1={positionX * idx} y1={30} x2={positionX * idx} y2={370} style={{stroke: "#e9e5dd", opacity: .4, strokeWidth: "2px"}} />
            <line x1={positionX * idx} y1={360} x2={positionX * idx} y2={370} style={{stroke: "#1f1f1f", strokeWidth: "2px"}} />
            <text x={positionX * idx} y={390} alignmentBaseline="middle" >{item}</text>
          </g>
        )
      }
      {/* horizontal axis X */}
      <line x1={-50} y1={360} x2={920} y2={360} style={{stroke: "#1f1f1f", strokeWidth: "2px"}} />
      {/* vertical axis Y */}
      <line x1={-40} y1={30} x2={-40} y2={370} style={{stroke: "#1f1f1f", strokeWidth: "1px"}} />
    </g>
  )
}

export default GraphGrid;