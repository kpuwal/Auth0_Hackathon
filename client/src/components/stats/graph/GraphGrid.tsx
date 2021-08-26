import { MONTHS } from '../../../config/constants';

const positionX: number = 80;
const textPosX: number = -60;
const textPosY: number = 20;

const GraphGrid = () => {
  return (
    <g>
      <MonthsLabels />
      <AxisX />
      <AxisY />
      <AxisYLabel />
    </g>
  )
}

const MonthsLabels = () => {
  return (
    <>
      {MONTHS.map((item, idx) => 
        <g key={idx}>
          <line x1={positionX * idx} y1={30} x2={positionX * idx} y2={370} style={{stroke: "#e9e5dd", opacity: .4, strokeWidth: "2px"}} />
          <line x1={positionX * idx} y1={360} x2={positionX * idx} y2={370} style={{stroke: "#1f1f1f", strokeWidth: "2px"}} />
          <text x={positionX * idx} y={390} alignmentBaseline="middle" >{item}</text>
        </g>
      )}
    </>
  )
}

const AxisX = () => {
  return (
    <>
      <line x1={-50} y1={360} x2={920} y2={360} style={{stroke: "#1f1f1f", strokeWidth: "2px"}} />
      <circle cx={920} cy={360} r={3} stroke="#1f1f1f" strokeWidth="1" fill="#ffffff" />
    </>
  )
}

const AxisY = () => {
  return (
    <>
      <line x1={-40} y1={30} x2={-40} y2={370} style={{stroke: "#1f1f1f", strokeWidth: 1}} />
      <circle cx={-40} cy={30} r={3} stroke="#1f1f1f" strokeWidth="1" fill="#ffffff" />
    </>
  )
}

const AxisYLabel = () => {
  return (
    <text x={textPosX} y={textPosY * 4}>t
      <tspan x={textPosX} y={textPosY * 5}>o</tspan>
      <tspan x={textPosX} y={textPosY * 6}>t</tspan>
      <tspan x={textPosX} y={textPosY * 7}>a</tspan>
      <tspan x={textPosX} y={textPosY * 8}>l</tspan>
      <tspan x={textPosX} y={textPosY * 10}>h</tspan>
      <tspan x={textPosX} y={textPosY * 11}>e</tspan>
      <tspan x={textPosX} y={textPosY * 12}>a</tspan>
      <tspan x={textPosX} y={textPosY * 13}>d</tspan>
      <tspan x={textPosX} y={textPosY * 14}>e</tspan>
      <tspan x={textPosX} y={textPosY * 15}>r</tspan>
      <tspan x={textPosX} y={textPosY * 16}>s</tspan>
    </text>
  )
}

export default GraphGrid;
