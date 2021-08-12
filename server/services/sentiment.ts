const Sentiment = require('sentiment');
const sentiment = new Sentiment();

import { INewsApiArticle, ISentimentAnalysis } from '../types';

const sentimentAnalysis = (data: INewsApiArticle[]): ISentimentAnalysis => {
  data.map((item: INewsApiArticle) => {
    item.analysed = sentiment.analyze(item.content);
  });
  
  return {
    positive: data.filter(el => el.analysed.score > 0),
    neutral: data.filter(el => el.analysed.score === 0),
    negative: data.filter(el => el.analysed.score < 0)
  }
};

export default sentimentAnalysis;
