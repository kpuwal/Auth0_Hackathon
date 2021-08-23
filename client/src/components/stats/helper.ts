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

const graphHeight = 290;
const halfIconWidth = 19;

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

type maxProp = {
  month: number,
  mood: string | undefined,
  posY: number,
  posX: number,
}

const findMaxMain = (data: maxProp[]) => {
  const maxNo = Math.max.apply(Math, data.map(obj => {return obj.posY})) || 0;
  const maxObj = data.find(obj => {return obj.posY === maxNo}) || data[0];
  return {
    month: maxObj?.month,
    mood: maxObj?.mood,
    posY: graphHeight - maxObj.posY,
    posX: maxObj.posX - halfIconWidth,
    txtVal: maxObj?.posY,
  }
}

const findGraphIconPoints = (data: dateProp[]) => {
  const maxValues = findMaxInMonth(data);
  const maxMain = findMaxMain(maxValues);
  const maxValPositions = maxValues.map(item => {
    return {
      month: item.month,
      mood: item.mood,
      posY: graphHeight - item.posY,
      posX: item.posX - halfIconWidth,
      txtVal: item.posY,
    }
  })
  return {
    max: maxValPositions,
    maxMain,
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
    collection.push(`${positionX * idx}, ${item} `)
  })
  return collection.join(" ");
}

const findGraphPoints = (data: dateProp[]) => {
  const rotated = rotateData(data);
  const posPoints = calculatePolylinePoints(rotated.positive);
  const neuPoints = calculatePolylinePoints(rotated.neutral);
  const negPoints = calculatePolylinePoints(rotated.negative);
  return { posPoints, neuPoints, negPoints }
}

export const prepData = (data: dateProp[]) => {
  const restructured = restructureData(data, initValues);
  const graphPoints = findGraphPoints(restructured);
  const graphIconPoints = findGraphIconPoints(restructured);
  
  return {...graphPoints, ...graphIconPoints};
}
