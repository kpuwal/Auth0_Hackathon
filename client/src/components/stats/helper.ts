import { dateProp } from '../../redux/types';

const initValues: dateProp[] = [
  {stamp: "0", positive: 0, neutral: 0, negative: 0},
  {stamp: "1", positive: 0, neutral: 0, negative: 0},
  {stamp: "2", positive: 0, neutral: 0, negative: 0},
  {stamp: "3", positive: 0, neutral: 0, negative: 0},
  {stamp: "4", positive: 0, neutral: 0, negative: 0},
  {stamp: "5", positive: 0, neutral: 0, negative: 0},
  {stamp: "6", positive: 0, neutral: 0, negative: 0},
  {stamp: "7", positive: 0, neutral: 0, negative: 0},
  {stamp: "8", positive: 0, neutral: 0, negative: 0},
  {stamp: "9", positive: 0, neutral: 0, negative: 0},
  {stamp: "10", positive: 0, neutral: 0, negative: 0},
  {stamp: "11", positive: 0, neutral: 0, negative: 0},
]

const restructureData = (data: dateProp[], defaultDataStructure: dateProp[]) => {
  data.forEach(el => {
    const findMatch = defaultDataStructure.findIndex(item => item.stamp === el.stamp);
    defaultDataStructure[findMatch] = el;
  })
  return defaultDataStructure;
}

const findMax = (data: dateProp[]) => {
  const pos = Math.max.apply(Math, data.map(obj => {return obj.positive}));
  const neu = Math.max.apply(Math, data.map(obj => {return obj.neutral}));
  const neg = Math.max.apply(Math, data.map(obj => {return obj.negative}));
  const maxAll = [
    { name: "positive", data: pos },
    { name: "neutral", data: neu },
    { name: "negative", data: neg },
  ]
  const foundNo = Math.max.apply(Math, maxAll.map(obj => {return obj.data}));
  const obj = maxAll.find(obj => { return obj.data === foundNo; })
  return obj;
}

const rotateData = (data: dateProp[]) => {
  const positives = data.map(a => a.positive);
  const neutrals = data.map(a => a.neutral);
  const negatives = data.map(a => a.negative);
  return {
    positive: positives,
    neutral: neutrals,
    negative: negatives,
    max: findMax(data),
  }
}

export const prepData = (data: dateProp[]) => {
  const restructured = restructureData(data, initValues);
  const rotated = rotateData(restructured);
  return rotated;
}
