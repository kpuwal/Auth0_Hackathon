/* eslint-disable @typescript-eslint/no-unused-vars */
const { db } = require('../db/config');
import { Request, Response } from 'express';
import { Icountries, Ititles } from '../types';
import { prepStatsCountries, prepStatsTitles, prepStatsDates } from '../services/prepStats'; 

const fetchData = async (query: string) => {
  try {
    const data = await db.any(query);
    return data;
  } catch(err) { return err }
}

export const aggregateStats = async (request: Request, response: Response): Promise<void> => {
  const countriesQuery = 'SELECT country, mood , COUNT(mood) FROM news GROUP BY country, mood ORDER BY country';
  const titlesQuery = 'SELECT source, mood, COUNT(mood) FROM news GROUP BY source, mood ORDER BY source';

  const dateQuery = 'SELECT stamp, mood FROM news GROUP BY stamp, mood ORDER BY stamp';

  const countries: Icountries[] = await fetchData(countriesQuery);
  const titles: Ititles[] = await fetchData(titlesQuery);
  const dates = await fetchData(dateQuery);

  response.send({
    byCountries: prepStatsCountries(countries),
    byTitles: prepStatsTitles(titles),
    byDates: prepStatsDates(dates)
  })
}
