import MoodBar from './main/MoodBar';
import CountriesBar from './main/CountriesBar';
import TitlesBar from './main/TitlesBar';
import HeadlinesBox from './main/HeadlinesBox';

const Main = () => {
  return (
    <div className="container">
  <div className="row">
    <div className="col-sm">
      <div className="headerLabel">Filter</div>
      <MoodBar />
      <CountriesBar />
      <TitlesBar />
    </div>
    <div className="col-sm">
      <HeadlinesBox />
    </div>
  </div>
</div>
  );
}

export default Main;