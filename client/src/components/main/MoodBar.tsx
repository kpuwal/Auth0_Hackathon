import { useAppDispatch } from '../../redux/store';
import { activateMood } from '../../redux/slices/activeSlice';
import styles from '../../css/App.module.css';

const posIcon = (active: boolean) => <span className={active ? styles.icon : styles.iconIn}>sentiment_satisfied_alt</span>
const neuIcon = (active: boolean) => <span className={active ? styles.icon : styles.iconIn}>&#xE87C;</span>
const negIcon = (active: boolean) => <span className={active ? styles.icon : styles.iconIn}>sentiment_very_dissatisfied</span>

const MOODS = [ 
  { label: "positive", icon: posIcon, active: true }, 
  { label: "neutral", icon: neuIcon, active: false },
  { label: "negative", icon: negIcon, active: false },
];

const MoodBar = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className={styles.barLabel}>by mood</div>
      <ul>
        {MOODS.map((mood, idx) => 
          <li className={styles.inlineItem} key={idx}>
            <div className={mood.active ? styles.speechBubbleAc : styles.speechBubbleIn}>{mood.label}</div>
            <button
              className={styles.moodButton}
              onClick={() => dispatch(activateMood(idx))} >
              {mood.icon(mood.active)}
            </button>
          </li>
        )}
      </ul>
    </>
  );
}

export default MoodBar;
