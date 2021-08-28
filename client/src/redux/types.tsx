import { INewsApiArticle } from '../../../server/types';

export type countriesProp = {
  country: string,
  moods: { 
    positive: number,
    neutral: number,
    negative: number, 
  },
  sum: number,
  dominant: {
    mood: string,
    count: number,
  },
}

export type countryProp = {
  data: countriesProp[],
  happy: string,
  sad: string,
}

export type titlesProp = {
  source: string,
  moods: { 
    positive: number,
    neutral: number,
    negative: number,
  },
  sum: number,
  dominant: {
    mood: string,
    count: number,
  },
}

export type titleProp = {
  data: titlesProp[],
  happy: string[],
  sad: string[],
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
  totalWorldMood: {
    name: string,
    data: number,
    best: number[],
    worst: number[],
  }
}

export interface statsInitStateType {
  byCountries: countryProp,
  byTitles: titleProp,
  byDates: graphDateProp,
}

export interface IData {
  title: string,
  country: string,
}

export interface IHeadlines {
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