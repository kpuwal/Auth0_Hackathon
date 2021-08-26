const rectBg: string = "#ffffff";
const lineStroke: string = "#a9a9a9";

interface ImaxIconItem {
  children: React.ReactNode;
  maxStyle?: string;
  posX: number;
  posY: number;
  txt: number;
}

const MaxIconItem = ({children, posX, posY, txt, maxStyle}: ImaxIconItem) => {
  return (
    <svg className={maxStyle}>
      <g>
        <rect
          x={posX} y={0} 
          width={40}
          height={350}
          fill={rectBg}
        />
        <line
          x1={posX + 19}
          y1={posY}
          x2={posX + 19}
          y2={360}
          style={{stroke: `${lineStroke}`, strokeWidth: "2px"}}
        />
          {children}
        <text
          className="speech-bubble-graph-txt"
          x={posX + 38} y={posY - 10}
        >
          {txt}
        </text>
      </g>
    </svg>
  )
}

export default MaxIconItem;
