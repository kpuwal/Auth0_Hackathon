import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { activateTitle } from '../../redux/slices/activeSlice';
import { fetchHeadlines } from '../../redux/slices/newsSlice';

const TitlesBar = () => {
  const TITLES = useSelector((state: RootState) => state.news.titles);
  const country = useSelector((state: RootState) => state.active.country.iso);
  const activeTitle = useSelector((state: RootState) => state.active.title);
  const dispatch = useAppDispatch();

  const handleHeadlines = (title: string) => {
    dispatch(fetchHeadlines({ title, country }));
    dispatch(activateTitle(title));
  }

  return (
    <div className="buttonsContainer">
      {TITLES.length !== 0 ?
      <>
        <span className="barLabel">by titles</span>
        <ul>
          {TITLES.map((title: string, idx: number) => 
            <li className="inlineItem" key={idx}>
              <button
                className="button"
                id={title === activeTitle ? "activated" : "deactivated"}
                onClick={() => handleHeadlines(title)}>
                {title}
              </button>
            </li>)
          }
        </ul>
      </>
      : <div/>
      }
    </div>
  )
}

export default TitlesBar;
