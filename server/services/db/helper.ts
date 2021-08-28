import { dataProps, moodProps } from '../../types';

const defaultObj = {mood: "", count: 0};

export const findSum = (data: dataProps[]) => {
  return data
    .map(el => el.count)
    .reduce((a,b) => a + b)
}

export const convertToPercent = (data: dataProps[], sum: number) => {
  return data.map(el => {
    return {[el.mood]: ((el.count/sum)*100).toFixed(1)}
  })
}

export const findDominantMood = (moods: dataProps[]) => {
  const foundNo = Math.max.apply(Math, moods.map(obj => {return obj.count}));
  return  moods.find(obj => {return obj.count === foundNo}) || defaultObj;
}

export const findMood = (data: moodProps[], type: string) => {
  const allType = data.filter(item => item.dominant.mood === type);
  const val = Math.max.apply(Math, allType.map(obj => {return parseFloat(obj.moods[type])}));
  const source = allType.find(obj => {
    return parseFloat(obj.moods[type]) == val});
  return source;
}