/* eslint-disable @typescript-eslint/no-unused-vars */
const { db } = require('../db/config');
import { Request, Response } from 'express';

const fetchData = async (query: string) => {
  try {
    const data = await db.any(query);
    return data;
  } catch(err) { return err }
}

export const aggregateStats = async (request: Request, response: Response): Promise<void> => {
  const countriesQuery = 'SELECT country, mood , COUNT(mood) FROM news GROUP BY country, mood ORDER BY country';
  const titlesQuery = 'SELECT source, mood, COUNT(mood) FROM news GROUP BY source, mood ORDER BY source';

  const countries = await fetchData(countriesQuery);
  const titles = await fetchData(titlesQuery);
  
  response.send({
    byCountries: countries,
    byTitles: titles
  })
}
