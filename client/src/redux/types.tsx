import { INewsApiArticle } from '../../../server/types';

export interface statsInitStateType {
  byCountries: {
    country: string,
    mood: string,
    count: number,
  }[],
  byTitles: {
    country: string,
    mood: string,
    count: number,
  }[]
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