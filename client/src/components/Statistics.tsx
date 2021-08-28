import useFetchStats from '../hooks/useFetchStats';
import BarGroup from './stats/BarGroup';
import WorldGraph from './stats/WorldGraph';
import SideMenu from './stats/main/SideMenu';
import SummaryCountries from './stats/SummaryCountries';
import SummaryTitles from './stats/SummaryTitles';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { COUNTRIES } from '../config/constants';

const Statistics = () => {
  useFetchStats();
  const countries = useSelector((state: RootState) => state.stats.byCountries);
  const titles = useSelector((state: RootState) => state.stats.byTitles);
  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4 info-container fixed-top">
          <SideMenu />
        </div>
        <div className="col-8 charts-container">
          <div 
            className="chart-box"
            id="statsworld"
            style={{height: window.innerHeight, paddingTop: "0px"}}
          >
            <WorldGraph />
          </div>
          <div 
            className="chart-box"
            id="statscountries" 
            style={{ paddingTop: "115px"}}
          > 
            <h2>countries moods</h2>
            <SummaryCountries
              happy={findCountryLabel(countries.happy)}
              sad={findCountryLabel(countries.sad)}
            />
            {
              countries.data.map((country, idx) => <BarGroup key={idx} moods={country.moods} label={findCountryLabel(country.country)} sum={country.sum} dominant={country.dominant} />)
            }      
          </div>
          <div
            className="chart-box" 
            id="statstitles"
            style={{paddingTop: "120px"}}
          >
            <h2>sa_mood by title</h2>
            <SummaryTitles
              happy={titles.happy}
              sad={titles.sad}
            />
            {
              titles.data.map((title, idx) => <BarGroup key={idx} moods={title.moods} label={title.source} sum={title.sum} dominant={title.dominant} />)
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
