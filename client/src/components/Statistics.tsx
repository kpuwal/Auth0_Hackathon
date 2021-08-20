import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import useFetchStats from '../hooks/useFetchStats';
import BarGroup from './stats/BarGroup';

const Statistics = () => {
  useFetchStats();
  const countries = useSelector((state: RootState) => state.stats.byCountries);
  const titles = useSelector((state: RootState) => state.stats.byTitles);

  console.log("countries ", countries);
  console.log("titles ", titles)

  return (
    <div className="container">
      <h2>Country mood:</h2>
      <div className="bar-group">
      {
        countries.map((country, idx) => <BarGroup key={idx} moods={country.moods} country={country.country} sum={country.sum} />)
      }
      </div>
    </div>
  );
};

export default Statistics;
