import { Icountries, Ititles, Idates } from '../types';

type statsProp = {stamp: number, mood: string};
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
    const newObj = Object.assign(percentage[0], percentage[1], percentage[2]);
    return {country, moods: newObj, sum};
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
    const percentage = convertToPercent(flatMood, sum);
    const newObj = Object.assign(percentage[0], percentage[1], percentage[2]);
    return {source, moods: newObj, sum};
  })
  return flattened;
}

const convertDate = (date: string | number) => {
  const mydate = new Date(date);
  const month =  mydate.getMonth();
  return month;
}

const groupByMonth = (dates: Idates[]) => {
  const map = new Map();
  dates.forEach((item) => {
       const key = item.stamp;
       const collection = map.get(key);
       if (!collection) {
           map.set(key, [item]);
       } else {
           collection.push(item);
       }
  });
  return map;
}

const filterMoods = (data: any) => {
  let filtered = [];
  for (const key in data) {
    const positives = data[key].filter((item: statsProp) => item.mood === "positive");
    const neutrals = data[key].filter((item: statsProp) => item.mood === "neutral");
    const negatives = data[key].filter((item: statsProp) => item.mood === "negative");
    filtered.push({
      stamp: key,
      positive: positives.length,
      neutral: neutrals.length,
      negative: negatives.length,
    })
  }
  return filtered;
}

export const prepStatsDates = (data: Idates[]) => {
  data.forEach(item => item.stamp = convertDate(item.stamp));
  const mapToObj = Object.fromEntries(groupByMonth(data));
  return filterMoods(mapToObj);
}
