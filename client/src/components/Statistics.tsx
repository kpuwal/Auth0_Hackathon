import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import useFetchStats from '../hooks/useFetchStats';

const Statistics = () => {
  useFetchStats();
  const countries = useSelector((state: RootState) => state.stats.byCountries);
  const titles = useSelector((state: RootState) => state.stats.byTitles);

  console.log("countries ", countries);
  console.log("titles ", titles)

  return (
    <div className="container">
      <h1>External API</h1>
    </div>
  );
};

export default Statistics;
