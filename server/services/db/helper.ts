type dataProps = {mood: string, count: number};

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
  return moods.find(obj => {return obj.count === foundNo});
}