import { INewsApiArticle } from '../../types';

export const cleanResponse = (data: INewsApiArticle[]): INewsApiArticle[] => {
  const nonNullData = data.filter(el => el.content !== null);
  nonNullData.map(el => {
    el.time = convertDate(el.publishedAt)
    el.content = el.content !== null ? cleanData(el.content) : el.content
  });

  return nonNullData;
}

const correctZero = (data: number) => {
  if (data < 10) {
    return "0" + data.toString();
  } else {
    return data 
  };
}

const convertDate = (date: string) => {
  const mydate = new Date(date);
  const hour = mydate.getHours();
  const minutes = mydate.getMinutes();
  const seconds = mydate.getSeconds();

  const cleanhour = correctZero(hour);
  const cleanminutes = correctZero(minutes)
  const cleanseconds = correctZero(seconds)
  
  return cleanhour + ':' + cleanminutes + ':' + cleanseconds;
}

const removeHTMLtags = (content: string) => {
  const regex = /(<([^>]+)>)/ig;
  return content.replace(regex, "");
}

const trimContentTxt = (txt: string) => {
  return txt.substring(0, txt.indexOf("["));
}

const cleanData = (txt: string) => {
  const removedHTML = removeHTMLtags(txt);
  return trimContentTxt(removedHTML);
}
