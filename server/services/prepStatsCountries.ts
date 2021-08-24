import { Icountries } from '../types';
type dataProps = {mood: string, count: number};

export const prepStatsCountries = (data: Icountries[]) => {
  const uniqueCountries = [...new Set(data.map((a) => a.country))];
  
  // finds all objects that belong to a country, finds sum of mood counts, calculates percentage for each mood, returns new array of objects 
  const flattened = uniqueCountries.map(country => {
    const flatMood = data
      .filter(item => item.country.match(country))
      .map(a => {return {mood: a.mood, count: parseInt(a.count)}})

    const sum = findSum(flatMood);
    const percentage = convertToPercent(flatMood, sum);
    const newObj = Object.assign(percentage[0], percentage[1], percentage[2]);
    
    return {
      country, 
      moods: newObj,
      sum
    };
  })
  return flattened;
}

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