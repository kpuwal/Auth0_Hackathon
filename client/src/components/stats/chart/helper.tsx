const bgBar: string = "#f1f1f1";
const bar: string = "#1f1f1f";
const bar2: string = "#787878";
const width: number = 20;
const height: number = 90;

type BackgroundBarProps = { barX: number };
type MainBarProps = {mood: number, barX: number, barOp: number};
type MoodPercentLabelShortProps = {mood: number, valX: number, barOp: number};
type MoodPercantLabelMainProps = {
  mood: number, valX: number, id: string, dominant: string, barOp: number
};

export const BackgroundBar = ({barX}: BackgroundBarProps) => {
  return (
    <rect x={barX} y={0} width={width} height={height} fill={bgBar} rx="3" ry="3" />
  )
}

export const MainBar = ({mood, barX, barOp}: MainBarProps) => {
  return (
    <rect x={barX} y={0} width={width} height={!isNaN(mood) ? mood * 0.9 : 0} rx="3" ry="3" fill={bar} opacity={barOp} />
  )
}

export const MoodPercentLabelMain = ({mood, valX, id, dominant, barOp}: MoodPercantLabelMainProps) => {
  return (
    <g>
      <text className="bar-text-rounded-val" fill={id === dominant ? bar : bar2} x={valX + 1} y={!isNaN(mood) ? 100 - mood : -10} alignmentBaseline="middle" opacity={barOp}>{roundValues(mood)}</text>
        
      <text className="bar-text-rounded-val-label" fill={id === dominant ? bar : bar2} x={valX} y={!isNaN(mood) ? 108 - mood : -10} alignmentBaseline="middle" opacity={barOp}>PERCENT</text>
    </g>
  )
}

export const MoodPercentLabelShort = ({mood, valX, barOp}: MoodPercentLabelShortProps) => {
  return (
    <g>
      <text className="bar-text-val" x={valX} y={!isNaN(mood) ? 105 - mood : -10} alignmentBaseline="middle" opacity={barOp}>{mood}%</text>
    </g>
  )
}

const roundValues = (val: number) => {
  const rounded = isNaN(val) ? 0 : Math.round(val);
  return rounded;
}
