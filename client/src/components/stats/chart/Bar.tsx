import { BackgroundBar, MainBar, MoodPercentLabelMain, MoodPercentLabelShort } from './helper';

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
        <BackgroundBar {...{barX}} />
        <MainBar {...{mood, barX, barOp}} />
      </g>
      <MoodPercentLabelMain {...{mood, valX, id, dominant, barOp}} />
      <MoodPercentLabelShort {...{mood, valX, barOp}} />
    </svg>
  )
}

export default Bar;
