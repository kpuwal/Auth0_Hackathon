import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { activateCountry } from '../../redux/slices/activeSlice';
import { fetchTitles } from '../../redux/slices/newsSlice';

type countryType = {
  iso: string,
  label: string,
}

const COUNTRIES: countryType[] = [
  { iso: "gb", label: "great britain" },
  { iso: "us", label: "united states" },
  { iso: "au", label: "australia" },
  { iso: "ca", label: "canada" },
]

const CountriesBar = () => {
  const activeCountry = useSelector((state: RootState) => state.active.country);
  const dispatch = useAppDispatch();
  const getTitles = (country: countryType) => {
    dispatch(fetchTitles(country.iso))
    dispatch(activateCountry(country))
  }

  return (
    <div className="buttonsContainer">
      <div className="barLabel">by coutries</div>
      <ul>
        {COUNTRIES.map((country, idx) => 
          <li className="inlineItem" key={idx}>
            <button
              id={country.iso === activeCountry.iso ? "activated" : "deactivated"}
              onClick={() => getTitles(country)} >
                {country.label}
            </button>
          </li>)
        }
      </ul>
    </div>
  );
}

export default CountriesBar;
