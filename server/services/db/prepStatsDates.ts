import { Idates } from '../../types';
import { prepStatsForGraph } from './prepStatsForGraph';

type statsProp = {stamp: number, mood: string};

export const prepStatsDates = (data: Idates[]) => {
  data.forEach(item => item.stamp = convertDate(item.stamp));
  const mapToObj = Object.fromEntries(groupByMonth(data));
  const filtered = filterMoods(mapToObj);
  return prepStatsForGraph(filtered);
}

const convertDate = (date: string | number) => {
  const mydate = new Date(date);
  return  mydate.getMonth();
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