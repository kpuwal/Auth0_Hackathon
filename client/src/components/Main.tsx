import MoodBar from './main/MoodBar';
import CountriesBar from './main/CountriesBar';

const Main = () => {
  return (
    <div className="container">
  <div className="row">
    <div className="col-4">
      <MoodBar />
      <CountriesBar />
    </div>
    <div className="col-sm">
      One of three columns
    </div>
  </div>
</div>
  );
}

export default Main;