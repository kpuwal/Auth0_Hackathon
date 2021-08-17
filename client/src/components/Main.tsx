import MoodBar from './main/MoodBar';
import CountriesBar from './main/CountriesBar';
import TitlesBar from './main/TitlesBar';
import HeadlinesBox from './main/HeadlinesBox';

const Main = () => {
  const fennelIcon = <span className="fennelIcon">
  filter_alt
  </span>
  return (
    <div className="container">
  <div className="row">
    <div className="col-sm">
      <div className="headerLabel">{fennelIcon} Filter:</div>
      <MoodBar />
      <CountriesBar />
      <TitlesBar />
    </div>
    <div className="col-sm" id="headlines-container">
      <HeadlinesBox />
    </div>
  </div>
</div>
  );
}

export default Main;