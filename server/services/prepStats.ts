import { Icountries, Ititles } from '../types';

export const prepStatsCountries = (data: Icountries[]) => {
  const uniqueCountries = [...new Set(data.map((a) => a.country))];
  const flattened = uniqueCountries.map(country => {
    const flatMood = data
      .filter(item => item.country.match(country))
      .map(a => {
        return {mood: a.mood, count: parseInt(a.count)}
      })

    const sum = flatMood
      .map(el => el.count)
      .reduce((a,b) => a + b)

    const procentage = flatMood.map(el => {
      return {[el.mood]: ((el.count/sum)*100).toFixed(1)}
    })

    return {country, moods: procentage};
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
    const sum = flatMood
      .map(el => el.count)
      .reduce((a,b) => a + b)

    const procentage = flatMood.map(el => {
      return {[el.mood]: ((el.count/sum)*100).toFixed(1)}
    })
    
    return {source, moods: procentage};
  })
  return flattened;
}

