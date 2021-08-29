import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { activateTitle, activateMain } from '../../redux/slices/activeSlice';
import { fetchHeadlines } from '../../redux/slices/newsSlice';

const TitlesBar = () => {
  const TITLES = useSelector((state: RootState) => state.news.titles);
  const country = useSelector((state: RootState) => state.active.country.iso);
  const activeTitle = useSelector((state: RootState) => state.active.title);
  const dispatch = useAppDispatch();

  const handleHeadlines = (title: string) => {
    dispatch(fetchHeadlines({ title, country }));
    dispatch(activateTitle(title));
    dispatch(activateMain(false));
  }

  return (
    <div className="buttons-container titles">
      {TITLES.length !== 0 ?
      <>
        <h6 className="bar-label">3. titles</h6>
        <ul>
          {
            TITLES.map((title: string, idx: number) => 
              <li className="inlineItem" key={idx}>
                <button
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
