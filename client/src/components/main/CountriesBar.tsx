import { useAppDispatch } from '../../redux/store';
import { activateCountry } from '../../redux/slices/activeSlice';
import { fetchTitles } from '../../redux/slices/newsSlice';
import styles from '../../css/App.module.css';

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
  const dispatch = useAppDispatch();
  const getTitles = (country: countryType) => {
    dispatch(fetchTitles(country.iso))
    dispatch(activateCountry(country))
  }

  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.barLabel}>by coutries</div>
      <ul>
        {COUNTRIES.map((country, idx) => 
          <li className={styles.inlineItem} key={idx}>
            <button
              className={styles.button}
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
