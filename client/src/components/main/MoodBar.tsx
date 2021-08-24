import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { activateMood } from '../../redux/slices/activeSlice';
import '../../css/MoodBar.css'

const posIcon = (active: boolean) => <span className="icon" id={active ? "activeIcon" : "inactiveIcon"}>sentiment_satisfied_alt</span>
const neuIcon = (active: boolean) => <span className="icon" id={active ? "activeIcon" : "inactiveIcon"}>&#xE87C;</span>
const negIcon = (active: boolean) => <span className="icon" id={active ? "activeIcon" : "inactiveIcon"}>sentiment_very_dissatisfied</span>

const MOODS = [ 
  { label: "positive", icon: posIcon }, 
  { label: "neutral", icon: neuIcon },
  { label: "negative", icon: negIcon },
];

const MoodBar = () => {
  const activeMood = useSelector((state: RootState) => state.active.mood);
  const dispatch = useAppDispatch();
  return (
    <>
      <span className="barLabel">by mood</span>
      <ul>
        {MOODS.map((mood, idx) => 
          <li className="inlineItem" key={idx}>
            <div
              className="speechBubble"
              id={idx === activeMood ? "active" : "inactive"}>
              {mood.label}
            </div>
            <button
              className="moodButton"
              onClick={() => dispatch(activateMood(idx))} >
                
              <span className="badge" style={{color: "pink"}}>7</span>

              {mood.icon(idx === activeMood)}
            </button>
          </li>
        )}
      </ul>
    </>
  );
}

export default MoodBar;
