import MoodBar from './main/MoodBar';
import CountriesBar from './main/CountriesBar';
import TitlesBar from './main/TitlesBar';
import HeadlinesBox from './main/HeadlinesBox';
import useFetchStats from '../hooks/useFetchStats';
import MainBg from './main/MainBg';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Main = () => {
  useFetchStats();
  const isActive = useSelector((state: RootState) => state.active.main);
  return (
    <div className="background-container">
    <div className="container">
      <div className="row">
        <div className="col-4 filter-container">
          <div className="header-label">Menu:</div>
          <p className="header-description">
            Three easy steps to consume news. 1. From the list below select your desired mood, 2. news source country and 3. the news provider. Enjoy.  
          </p>
          <MoodBar />
          <CountriesBar />
          <TitlesBar />
        </div>
        <div className="col-8 headlines-container">
          {
            isActive ? <MainBg /> : <HeadlinesBox />
          }
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default Main;