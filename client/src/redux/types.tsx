import { INewsApiArticle } from '../../../server/types';

export type countryProp = {
  country: string,
  moods: { 
    positive: number,
    neutral: number,
    negative: number, 
  },
  sum: number,
}

export type titleProp = {
  source: string,
  moods: { 
    positive: number,
    neutral: number,
    negative: number,
  },
  sum: number,
}

export type dateProp = {
  stamp: string,
  positive: number,
  neutral: number,
  negative: number,
}

export interface statsInitStateType {
  byCountries: countryProp[],
  byTitles: titleProp[],
  byDates: dateProp[],
}

export interface IData {
  title: string,
  country: string,
}

interface IHeadlines {
  positive: INewsApiArticle[],
  neutral: INewsApiArticle[],
  negative: INewsApiArticle[],
}

export interface ICountries {
  iso: string,
  label: string,
}

export interface newsInitStateType {
  titles: string[],
  headlines: IHeadlines,
  loading: string,
}