import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { COUNTRIES } from '../config/constants';

import useFetchStats from '../hooks/useFetchStats';
import BarGroup from './stats/BarGroup';
import WorldGraph from './stats/WorldGraph';

const findCountryLabel = (country: string) => {
  const countryObj = COUNTRIES.find(obj => {return obj.iso === country});
  return countryObj?.label || "";
}

const Statistics = () => {
  useFetchStats();
  const countries = useSelector((state: RootState) => state.stats.byCountries);
  const titles = useSelector((state: RootState) => state.stats.byTitles);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4 info-container fixed-top">
          <h4>filter by country mood:</h4>
          <h4>Newspaper title mood:</h4>
        </div>
        <div className="col-8 charts-container">
          <div  className="chart-box">
            <WorldGraph />
          </div>
          <div className="chart-box">
            {
              countries.map((country, idx) => <BarGroup key={idx} moods={country.moods} label={findCountryLabel(country.country)} sum={country.sum} />)
            }
          </div>
          <div className="chart-box"></div>
            {
              titles.map((country, idx) => <BarGroup key={idx} moods={country.moods} label={country.source} sum={country.sum} />)
            }
          </div>
      </div>
    </div>
  );
};

export default Statistics;
