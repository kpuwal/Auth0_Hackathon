import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { INewsApiArticle } from '../../../../server/types';
import styles from '../../css/App.module.css';

// const MONTHS = ["January", "February", "March", "April", "May", "June",
// "July", "August", "September", "October", "November", "December"];

const HeadlinesBox = () => {
  const activeTab = useSelector((state: RootState) => state.active.mood);
  const headlines = useSelector((state: RootState) => state.news.headlines);
  const ARTICLES = [headlines.positive, headlines.neutral, headlines.negative];
  console.log(headlines.positive)

  const correctZero = (data: number) => {
    if (data < 10) {
      return "0" + data.toString();
    } else { return data };
  }

  const convertDate = (date: string) => {
    const mydate = new Date(date);
    const hour = mydate.getHours();
    const minutes = mydate.getMinutes();
    const seconds = mydate.getSeconds();

    const cleanhour = correctZero(hour);
    const cleanminutes = correctZero(minutes)
    const cleanseconds = correctZero(seconds)
    return cleanhour + ':' + cleanminutes + ':' + cleanseconds;
  }

  const trimContentTxt = (txt: string | null) => {
   return txt !== null ? txt.substring(0, txt.indexOf("[")) : txt;
  }

  return (
    <ul>
      {
        ARTICLES[activeTab].map((article: INewsApiArticle, idx) => 
          <li key={idx}>
            <div className={styles.articleContainer}>
              <h6>
                {article.source.name} <span className={styles.headlineTime}> {convertDate(article.publishedAt)}
                </span>
              </h6>
              <h5 style={{fontWeight: 'bold', fontSize: '15px'}}>{article.title}</h5>
              <p className={styles.headlinesContent}>
                {trimContentTxt(article.content)}
                <a href={article.url}>Read more</a>
              </p>
            </div>
          </li>
        )
      }
    </ul>
  );
}

export default HeadlinesBox;
