import { dateProp } from '../../redux/types';

const positionX = 80;

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

const findMaxInMonth = (data: dateProp[]) => {
  console.log("data ", data)
  const maxCollection = data.map((item, idx) => {
   const monthObj = [
     { name: "positive", data: item.positive },
     { name: "neutral", data: item.neutral },
     { name: "negative", data: item.negative },
    ];
  
   const foundNo = Math.max.apply(Math, monthObj.map(obj => {return obj.data}));const maxNo = monthObj.find(obj => {return obj.data === foundNo});
   
   return {
     month: idx,
     mood: maxNo?.name,
     posY: foundNo,
     posX: positionX * idx,
   }
  })
  return maxCollection;
}

// const findMax = (data: dateProp[]) => {
//   const pos = Math.max.apply(Math, data.map(obj => {return obj.positive}));
//   const neu = Math.max.apply(Math, data.map(obj => {return obj.neutral}));
//   const neg = Math.max.apply(Math, data.map(obj => {return obj.negative}));
//   const maxAll = [
//     { name: "positive", data: pos },
//     { name: "neutral", data: neu },
//     { name: "negative", data: neg },
//   ]
//   const foundNo = Math.max.apply(Math, maxAll.map(obj => {return obj.data}));
//   // const maxNo = maxAll.find(obj => {return obj.data === foundNo})
//   const maxObj = data.find(obj => {return obj.positive === foundNo || obj.negative === foundNo || obj.neutral === foundNo});
//   console.log(maxObj)
//   // const x = parseInt(maxObj?.stamp)
//   // return {
//   //   maxY: foundNo,
//   //   maxY: maxObj.stamp
//   // };
//   findMaxInMonth(data)
//   return maxObj
// }

const rotateData = (data: dateProp[]) => {
  const positives = data.map(a => a.positive);
  const neutrals = data.map(a => a.neutral);
  const negatives = data.map(a => a.negative);
  return {
    positive: positives,
    neutral: neutrals,
    negative: negatives,
    max: findMaxInMonth(data),
  }
}

const calculatePoints = (data: number[]) => {
  let collection: any = [];
  data.forEach((item, idx) => {
    collection.push(`${positionX * idx}, ${item} `)
  })
  return collection.join(" ");
}

export const prepData = (data: dateProp[]) => {
  const restructured = restructureData(data, initValues);
  const rotated = rotateData(restructured);
  const posPoints = calculatePoints(rotated.positive);
  const neuPoints = calculatePoints(rotated.neutral);
  const negPoints = calculatePoints(rotated.negative);
  return {posPoints, neuPoints, negPoints, max: rotated.max};
}
