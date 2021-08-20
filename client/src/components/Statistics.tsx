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
      <h1>External API</h1>
      {
        countries.map((country, idx) => <BarGroup key={idx} moods={country.moods} country={country.country} sum={country.sum} />)
      }
    </div>
  );
};

export default Statistics;
