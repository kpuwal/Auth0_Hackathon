const bgBar: string = "#e0dbd7";
const bar: string = "#1f1f1f";
const bar2: string = "#787878";
const width: number = 20;
const height: number = 90;

type BackgroundBarProps = { barX: number };

export const BackgroundBar = ({barX}: BackgroundBarProps) => {
  return (
    <rect
      x={barX} y={0}
      rx={3} ry={3}
      width={width}
      height={height}
      fill={bgBar}
      opacity={.6}
    />
  )
}

type MainBarProps = {mood: number, barX: number, barOp: number};

export const MainBar = ({mood, barX, barOp}: MainBarProps) => {
  return (
    <rect
      x={barX} y={0}
      rx={3} ry={3}
      width={width}
      height={!isNaN(mood) ? mood * 0.9 : 0} 
      fill={bar}
      opacity={barOp} />
  )
}

type MoodPercantLabelMainProps = {
  mood: number, valX: number, id: string, dominant: string, barOp: number
};

export const MoodPercentLabelMain = ({mood, valX, id, dominant, barOp}: MoodPercantLabelMainProps) => {
  return (
    <g>
      <text
        className="bar-text-rounded-val"
        fill={id === dominant ? bar : bar2}
        x={valX + 1}
        y={!isNaN(mood) ? 100 - mood : -10}
        alignmentBaseline="middle"
        opacity={barOp}>{roundValues(mood)}
      </text>
        
      <text
        className="bar-text-rounded-val-label"
        fill={id === dominant ? bar : bar2}
        x={valX}
        y={!isNaN(mood) ? 108 - mood : -10}
        alignmentBaseline="middle"
        opacity={barOp}>
          PERCENT
      </text>
    </g>
  )
}

type MoodPercentLabelShortProps = {mood: number, valX: number, barOp: number};

export const MoodPercentLabelShort = ({mood, valX, barOp}: MoodPercentLabelShortProps) => {
  return (
    <g>
      <text
        className="bar-text-val"
        x={valX}
        y={!isNaN(mood) ? 105 - mood : -10}
        alignmentBaseline="middle"
        opacity={barOp}>
          {mood}%
        </text>
    </g>
  )
}

const roundValues = (val: number) => {
  return isNaN(val) ? 0 : Math.round(val);
}
