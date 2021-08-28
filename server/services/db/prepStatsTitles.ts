import { Ititles, moodProps } from '../../types';
import {
  findSum,
  convertToPercent,
  findDominantMood,
  findMood,
} from './helper';

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
  
  return {
    data: flattened,
    ...findMoodArrays(flattened),
  };
}

const findMoodArrays = (data: moodProps[]) => {
  const newData = [...data];
  const posArr = findMoodArrayItems(newData, "positive", 5);
  const negArr = findMoodArrayItems(newData, "negative", 5);
  return { happy: posArr, sad: negArr }
}

const findMoodArrayItems = (data: moodProps[], type: string, noElem: number) => {
  const moodArr = [];
  for(let i = 0; i < noElem; i++) {
    const source = findMood(data, type);
    const sourceIdx = data.findIndex(item => item.source === source?.source);
    data.splice(sourceIdx, 1);
    moodArr.push(source?.source);
  }
  return moodArr;
}