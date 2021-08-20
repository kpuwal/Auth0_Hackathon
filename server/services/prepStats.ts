import { Icountries, Ititles } from '../types';

type dataProps = {mood: string, count: number};

const findSum = (data: dataProps[]) => {
  return data
    .map(el => el.count)
    .reduce((a,b) => a + b)
}

const convertToPercent = (data: dataProps[], sum: number) => {
  return data.map(el => {
    return {[el.mood]: ((el.count/sum)*100).toFixed(1)}
  })
}

export const prepStatsCountries = (data: Icountries[]) => {
  const uniqueCountries = [...new Set(data.map((a) => a.country))];
  const flattened = uniqueCountries.map(country => {
    const flatMood = data
      .filter(item => item.country.match(country))
      .map(a => {
        return {mood: a.mood, count: parseInt(a.count)}
      })

    const sum = findSum(flatMood);
    const percentage = convertToPercent(flatMood, sum);
    return {country, moods: percentage, sum};
  })
  return flattened;
}

export const prepStatsTitles = (data: Ititles[]) => {
  const uniqueCountries = [...new Set(data.map((a) => a.source))];
  const flattened = uniqueCountries.map(source => {
    const flatMood = data
      .filter(item => item.source === source)
      .map(a => {
        return {mood: a.mood, count: parseInt(a.count)}
      })
    
    const sum = findSum(flatMood);
    const procentage = convertToPercent(flatMood, sum);
    return {source, moods: procentage, sum};
  })
  return flattened;
}

