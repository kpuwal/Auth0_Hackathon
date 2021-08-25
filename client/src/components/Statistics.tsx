import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { COUNTRIES } from '../config/constants';

import useFetchStats from '../hooks/useFetchStats';
import BarGroup from './stats/BarGroup';
import WorldGraph from './stats/WorldGraph';

const Statistics = () => {
  useFetchStats();
  const countries = useSelector((state: RootState) => state.stats.byCountries);
  const titles = useSelector((state: RootState) => state.stats.byTitles);
  console.log("height: ", window.innerHeight)
  return (
    <div className="container">
      <div className="row justify-content-center">

        <div className="col-4 info-container fixed-top">
          <div className="headerLabel">Filter:</div>
          <ul className="sidebar-menu">
            <li><a className="sidebar-menu-item" href='#statsworld'>stats for the world {">"}</a></li>
            <li><a className="sidebar-menu-item" href='#statscountries'>stats for the countries {">"}</a></li>
            <li><a className="sidebar-menu-item" href='#statstitles'>stats for the titles {">"}</a></li>
          </ul>
        </div>

        <div className="col-8 charts-container">
          <div 
            className="chart-box"
            id="statsworld"
            style={{height: window.innerHeight, paddingTop: "80px"}}>
            <WorldGraph />
          </div>
          <div 
            className="chart-box" 
            id="statscountries" 
            style={{height: window.innerHeight, paddingTop: "155px"}}>
            {
              countries.map((country, idx) => <BarGroup key={idx} moods={country.moods} label={findCountryLabel(country.country)} sum={country.sum} dominant={country.dominant} />)
            }
          </div>
          <div
            className="chart-box" 
            id="statstitles"
            style={{paddingTop: "100px"}}>
            {
              titles.map((title, idx) => <BarGroup key={idx} moods={title.moods} label={title.source} sum={title.sum} dominant={title.dominant} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

const findCountryLabel = (country: string) => {
  const countryObj = COUNTRIES.find(obj => {return obj.iso === country});
  return countryObj?.label || "";
}

export default Statistics;
