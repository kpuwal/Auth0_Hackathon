import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { activateMood } from '../../redux/slices/activeSlice';
import { HappyIcn, NeutralIcn, NegativeIcn } from '../stats/Icons';
import { IHeadlines } from '../../redux/types';
import MoodButton from './MoodButton';
import '../../css/moodbar.css';

const MOODS = [
  { name: "positive", icon: <HappyIcn scale={1} posX={20} posY={30} /> },
  { name: "neutral", icon: <NeutralIcn scale={1} posX={20} posY={30} /> },
  { name: "negative", icon: <NegativeIcn scale={1} posX={20} posY={30} /> },
];

const MoodBar = () => {
  const activeMood = useSelector((state: RootState) => state.active.mood);
  const headlines = useSelector((state: RootState) => state.news.headlines);
  const dispatch = useAppDispatch();

  return (
    <>
      <h6 className="bar-label">1. mood</h6>
      {MOODS.map((mood, idx) => (
        <button
          key={idx}
          className="mood-button"
          onClick={() => dispatch(activateMood(idx))}>
          <MoodButton
            txt={mood.name} 
            badgeVal={findBadgeValue(mood.name, headlines)} 
            color={activeMood === idx ? 1 : .15}>
              {mood.icon}
          </MoodButton>
        </button>
      ))}
    </>
  );
}

const findBadgeValue = (mood: string, headlines: IHeadlines) => {
  switch (mood) {
    case "positive":
      return headlines.positive.length;
    case "neutral":
      return headlines.neutral.length;
    case "negative":
      return headlines.negative.length;
    default:
      return 0;
  }
}

export default MoodBar;
