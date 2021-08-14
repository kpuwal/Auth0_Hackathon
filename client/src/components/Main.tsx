import MoodBar from './main/MoodBar';

const Main = () => {
  return (
    <div className="container">
  <div className="row">
    <div className="col-4">
      <MoodBar />
    </div>
    <div className="col-sm">
      One of three columns
    </div>
  </div>
</div>
  );
}

export default Main;