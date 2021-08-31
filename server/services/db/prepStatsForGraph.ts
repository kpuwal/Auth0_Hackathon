import { dateProp } from '../../types';

const scale: number = 0.5;

type maxProp = {
  month: number,
  mood: string | undefined,
  posY: number,
  posX: number,
}

export const prepStatsForGraph = (data: dateProp[]) => {
  const restructured = restructureData(data, initValues);
  const byMonth = findMaxInMonth(restructured);

  const graphPoints = findGraphPoints(restructured);
  const graphIconPoints = findGraphIconPoints(byMonth);
  
  const best = findMaxWorldMoods(byMonth, "positive");
  const worst = findMaxWorldMoods(byMonth, "negative");
  const totalWorldMood = findWorldMood(restructured);
  return {
    ...graphPoints,
    ...graphIconPoints,
    totalWorldMood: {...totalWorldMood, best, worst}
  };
}

const positionX = 80;
const graphHeight = 290;
const halfIconWidth = 19;
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
  const maxCollection = data.map((item, idx) => {
   const monthObj = [
     { name: "positive", data: item.positive },
     { name: "neutral", data: item.neutral },
     { name: "negative", data: item.negative },
    ];
  
   const foundNo = Math.max.apply(Math, monthObj.map(obj => {return obj.data}));
   const maxNo = monthObj.find(obj => {return obj.data === foundNo});
   
   return {
     month: idx,
     mood: maxNo?.name,
     posY: foundNo,
     posX: positionX * idx,
   }
  })
  return maxCollection;
}

const findMaxIconHighlight = (data: maxProp[]) => {
  const maxNo = Math.max.apply(Math, data.map(obj => {return obj.posY})) || 0;
  const remained = data.filter(item => item.posY !== maxNo);
  const maxNo2 = Math.max.apply(Math, remained.map(obj => {return obj.posY})) || 0;
  const remained2 = remained.filter(item => item.posY !== maxNo2);
  const maxNo3 = Math.max.apply(Math, remained2.map(obj => {return obj.posY})) || 0;
  const maxObj = data.find(obj => {return obj.posY === maxNo}) || data[0];
  const maxObj2 = data.find(obj => {return obj.posY === maxNo2}) || data[0];
  const maxObj3 = data.find(obj => {return obj.posY === maxNo3}) || data[0];

  return {
    main: {
      month: maxObj.month,
      mood: maxObj.mood,
      posY: graphHeight - maxObj.posY * scale,
      posX: maxObj.posX - halfIconWidth,
      txtVal: maxObj.posY
    },
    second: {
      month: maxObj2.month,
      mood: maxObj2.mood,
      posY: graphHeight - maxObj2.posY * scale,
      posX: maxObj2.posX - halfIconWidth,
      txtVal: maxObj2.posY
    },
    third: {
      month: maxObj3.month,
      mood: maxObj3.mood,
      posY: graphHeight - maxObj3.posY * scale,
      posX: maxObj3.posX - halfIconWidth,
      txtVal: maxObj3.posY
    },
  }
}

const findMaxWorldMoods = (data: maxProp[], type: string) => {
  const newData = [...data];
  const foundType = newData.filter(item => item.mood === type);
  
  const maxPos = Math.max.apply(Math, foundType.map(obj => {return obj.posY}));
  const mood = newData.find(obj => {return obj.posY === maxPos}) || data[0];
  const idx = newData.findIndex(item => item.posY === mood.posY);
  newData.splice(idx, 1);
  
  const maxPos2 = Math.max.apply(Math, foundType.map(obj => {return obj.posY}));
  const mood2 = newData.find(obj => {return obj.posY === maxPos2}) || data[0];
  
  const mood2Real = mood.posY - mood2.posY > 5 ? 13 : mood2.month;
  return [mood.month, mood2Real];
} 

const findGraphIconPoints = (data: maxProp[]) => {
  const maxIconHighlight = findMaxIconHighlight(data);
  const maxValPositions = data.map(item => {
    return {
      month: item.month,
      mood: item.mood,
      posY: graphHeight - item.posY * scale,
      posX: item.posX - halfIconWidth,
      txtVal: item.posY,
    }
  })
  return {
    max: maxValPositions,
    ...maxIconHighlight,
  };
}

const rotateData = (data: dateProp[]) => {
  const positives = data.map(a => a.positive);
  const neutrals = data.map(a => a.neutral);
  const negatives = data.map(a => a.negative);
  return {
    positive: positives,
    neutral: neutrals,
    negative: negatives,
  }
}

const calculatePolylinePoints = (data: number[]) => {
  let collection: any = [];
  data.forEach((item, idx) => {
    collection.push(`${positionX * idx}, ${item * scale} `)
  })
  return collection.join(" ");
}

const findGraphPoints = (data: dateProp[]) => {
  const rotated = rotateData(data);
  const posPoints: string = calculatePolylinePoints(rotated.positive);
  const neuPoints: string = calculatePolylinePoints(rotated.neutral);
  const negPoints: string = calculatePolylinePoints(rotated.negative);
  return { posPoints, neuPoints, negPoints }
}

const findMood = (pos: number[], neu: number[], neg: number[]) => {
  const sumPos = pos.reduce((x: any, y: any) => x + y);
  const sumNeu = neu.reduce((x: any, y: any) => x + y);
  const sumNeg = neg.reduce((x: any, y: any) => x + y);

  const newData = [
    {name: "positive", data: sumPos},
    {name: "neutral" , data: sumNeu},
    {name: "negative", data: sumNeg},
  ]
  const foundNo = Math.max.apply(Math, newData.map(obj => {return obj.data}));
  const worldMood = newData.find(obj => {return obj.data === foundNo});
  return worldMood;
}

const findWorldMood = (data: dateProp[]) => {
  const positives = data.map(a => a.positive);
  const neutrals = data.map(a => a.neutral);
  const negatives = data.map(a => a.negative);
  const worldMood = findMood(positives, neutrals, negatives);
  return worldMood;
}
