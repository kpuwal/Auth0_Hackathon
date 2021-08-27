import { Icountries, moodProps } from '../../types';
import { findSum, convertToPercent, findDominantMood } from './helper';

export const prepStatsCountries = (data: Icountries[]) => {
  const uniqueCountries = [...new Set(data.map((a) => a.country))];
  
  // finds all objects that belong to a country, finds sum of mood counts, calculates percentage for each mood, returns new array of objects 
  const flattened = uniqueCountries.map(country => {
    const flatMood = data
      .filter(item => item.country.match(country))
      .map(a => {return {mood: a.mood, count: parseInt(a.count)}})
    
    const dominant = findDominantMood(flatMood);
    const sum = findSum(flatMood);
    const percentage = convertToPercent(flatMood, sum);
    const moodsObj = Object.assign(percentage[0], percentage[1], percentage[2]);
    
    return {
      country, 
      moods: moodsObj,
      sum,
      dominant,
    };
  })
  
  return { 
    countries: flattened, 
    happy: findMood(flattened, "positive")?.country,
    sad: findMood(flattened, "negative")?.country,
  }
}

const findMood = (data: moodProps[], type: string) => {
  const allType = data.filter(item => item.dominant.mood === type);
  const negVal = Math.max.apply(Math, allType.map(obj => {return parseFloat(obj.moods[type])}));
  const country = allType.find(obj => {
    return parseFloat(obj.moods[type]) == negVal});
  return country;
}
