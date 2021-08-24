interface IgraphPolyline {
  transformY: number;
  points: string;
  opacityLine: number;
  strokeWidth: number;
}

const GraphPolyline = ({transformY, points, opacityLine, strokeWidth}: IgraphPolyline) => {
  return (
    <g transform={`matrix(1 0 0 -1 0 ${transformY})`}>
      <polyline points={points} style={{fill: "none", opacity: opacityLine, stroke: "#1f1f1f", strokeWidth}} />

      {/* undergraph bg */}
      <polyline points={points} style={{fill: "#1f1f1f", opacity: .03, stroke: "#1f1f1f", strokeWidth}} />
    </g>
  )
}

export default GraphPolyline;
