const { db, pgp } = require('../../db/config');
import { INewsApiArticle, ISentimentAnalysis } from '../../types';

const extractEssential = (items: INewsApiArticle[], mood: string, country: string) => {
  return items.map(item => {
    return {
      mood,
      stamp: item.publishedAt,
      country,
      source: item.source.id
    }
  })
}

const extractImportantData = (data: ISentimentAnalysis, country: string) => {
  const positives = extractEssential(data.positive, "positive", country);
  const neutral = extractEssential(data.neutral, "neutral", country);
  const negatives = extractEssential(data.negative, "negative", country);
  return [...positives, ...neutral, ...negatives];
}

export const saveToDatabase = async (data: ISentimentAnalysis, country: string): Promise<void> => {
  const values = extractImportantData(data, country);
  const query = pgp.helpers.concat([
    {query: pgp.helpers.insert(values, ['mood', 'stamp', 'country', 'source'], 'news')},
    {query: 'DELETE FROM news a USING news b WHERE a.id < b.id AND a.stamp = b.stamp'}
  ])

  try {
    await db.none(query)
  } catch(err) {return err}
}
