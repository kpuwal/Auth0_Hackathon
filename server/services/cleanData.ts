import { INewsApiArticle } from '../types';

const removeHTMLtags = (content: string) => {
  const regex = /(<([^>]+)>)/ig;
  return content.replace(regex, "");
}

export const cleanResponse = (data: INewsApiArticle[]): INewsApiArticle[] => {
  const cleanData = data.filter(el => el.content !== null);
  cleanData.map(el => 
      el.content = el.content !== null ? removeHTMLtags(el.content) : el.content
    );
  return cleanData;
}
