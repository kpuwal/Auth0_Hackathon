import MoodBar from './main/MoodBar';
import CountriesBar from './main/CountriesBar';
import TitlesBar from './main/TitlesBar';
import HeadlinesBox from './main/HeadlinesBox';
import useFetchStats from '../hooks/useFetchStats';

const Main = () => {
  useFetchStats();
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 filter-container fixed-top">
          <div className="headerLabel">Access Headlines:</div>
          <MoodBar />
          <CountriesBar />
          <TitlesBar />
        </div>
        <div className="col-6 headlines-container">
          <HeadlinesBox />
        </div>
      </div>
    </div>
  );
}

export default Main;