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

export type maxProp = {
  month: number,
  mood: string | undefined,
  posY: number,
  posX: number,
  txtVal: number,
}

interface graphDateProp {
  posPoints: string,
  neuPoints: string,
  negPoints: string,
  max: maxProp[],
  main: maxProp,
  second: maxProp,
  third: maxProp,
}

export interface statsInitStateType {
  byCountries: countryProp[],
  byTitles: titleProp[],
  byDates: graphDateProp,
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