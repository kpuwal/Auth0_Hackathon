import { Ititles } from '../../types';
import { findSum, convertToPercent, findDominantMood } from './helper';

export const prepStatsTitles = (data: Ititles[]) => {
  const uniqueCountries = [...new Set(data.map((a) => a.source))];
  
  // finds all objects that belong to a title, finds sum of mood counts, calculates percentage for each mood, returns new array of objects 
  const flattened = uniqueCountries.map(source => {
    const flatMood = data
      .filter(item => item.source === source)
      .map(a => {return {mood: a.mood, count: parseInt(a.count)}})
    
    const dominant = findDominantMood(flatMood);
    const sum = findSum(flatMood);
    const percentage = convertToPercent(flatMood, sum);
    const newObj = Object.assign(percentage[0], percentage[1], percentage[2]);
    
    return {
      source, 
      moods: newObj,
      sum,
      dominant,
    };
  })
  return flattened;
}