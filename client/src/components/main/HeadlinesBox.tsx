import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { INewsApiArticle } from '../../../../server/types';
import '../../css/HeadlinesBox.css';

const HeadlinesBox = () => {
  const activeTab = useSelector((state: RootState) => state.active.mood);
  const headlines = useSelector((state: RootState) => state.news.headlines);
  const ARTICLES = [headlines.positive, headlines.neutral, headlines.negative];

  return (
    <ul>
      {
        ARTICLES[activeTab].map((article: INewsApiArticle, idx) => 
          <li key={idx}>
            <div className="articleContainer">
              <div className="headlineSource">
                {article.source.name} <span className="headlineTime"> {article.time}
                </span>
              </div>
              <div className="headlineTitle">{article.title}</div>
              <p className="headlineContent">
                {article.content}
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
