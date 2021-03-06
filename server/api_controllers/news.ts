require('dotenv').config();
import axios from 'axios';
import querystring from 'querystring';
import sentimentAnalysis from '../services/sentiment';
import { Request, Response } from 'express';
import { saveToDatabase } from '../services/news/saveToDatabase';
import { cleanResponse } from '../services/news/cleanData';
import {
  INewsApiSourcesResponse,
  INewsApiHeadlinesResponse,
  INewsApiSourceItem,
  axiosRequestType,
  configType
} from '../types';

const url = process.env.NEWS_URL;
const apiKey = process.env.NEWS_API_KEY;

const getData = async (url: string, config: configType) => {
  const endpointUrl = url;
  const query = querystring.stringify(config);
  const apiUrl = `${endpointUrl}?${query}`;

  try {
    const response = await axios.get<axiosRequestType>(apiUrl);
    return response.data;
  } catch(err) { return err }
}

export const sourcesRequest = async (request: Request, response: Response): Promise<void> => {
  const country = request.body.data;
  const apiUrl = `${url}/sources`;
  const config = { country, apiKey };
  const  apiResponse: INewsApiSourcesResponse | any = await getData(apiUrl, config);

  // if (apiResponse.status === 'ok') {
  //   const titles = apiResponse.sources.map((item: INewsApiSourceItem) => item.id);
  //   response.send(titles);
  // } else { response.send('api server response error') }

  if (apiResponse.status === 'error') {response.status(500).send('api server errror')};
  const titles = apiResponse.sources.map((item: INewsApiSourceItem) => item.id);
  response.status(200).send(titles);
}

export const headlinesRequest = async (request: Request, response: Response): Promise<void> => {
  const title = request.body.data;
  const apiUrl = `${url}/top-headlines`;
  const config = { sources: title, sortBy: 'top', apiKey }
  const apiResponse: INewsApiHeadlinesResponse | any = await getData(apiUrl, config);
  
  // if (apiResponse.status === 'ok') {
  //   const cleaned = cleanResponse(apiResponse.articles);
  //   const analysed = sentimentAnalysis(cleaned);
  //   saveToDatabase(analysed, request.body.country);
  //   response.send(analysed)
  // } else { response.send('api server response error') }

  if (apiResponse.status === 'error') {response.send('api server response error')};
  const cleaned = cleanResponse(apiResponse.articles);
  const analysed = sentimentAnalysis(cleaned);
  saveToDatabase(analysed, request.body.country);
  response.send(analysed);
}
