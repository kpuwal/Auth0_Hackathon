type ApiNewsResponseStatus = 'ok' | 'error';

type ApiNewsCountry = 'ae' | 'ar' | 'at' | 'au' | 'be' | 'bg' | 'br' | 'ca' | 'ch' | 'cn' | 'co' | 'cu' | 'cz' | 'de' | 'eg' | 'fr' | 'gb' | 'gr' | 'hk' | 'hu' | 'id' | 'ie' | 'il' | 'in' | 'it' | 'jp' | 'kr' | 'lt' | 'lv' | 'ma' | 'mx' | 'my' | 'ng' | 'nl' | 'no' | 'nz' | 'ph' | 'pl' | 'pt' | 'ro' | 'rs' | 'ru' | 'sa' | 'se' | 'sg' | 'si' | 'sk' | 'th' | 'tr' | 'tw' | 'ua' | 'us' | 've' | 'za';

type ApiNewsLanguage = 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'se' | 'ud' | 'zh';

type ApiNewsCategory = 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';

interface INewsApiSource {
	id: string | null;
	name: string;
}

export interface INewsApiSourceItem {
	id: string;
	name: string;
	description: string;
	url: string;
	category: ApiNewsCategory;
	language: ApiNewsLanguage;
	country: ApiNewsCountry;
}

export interface INewsApiArticle {
	source: INewsApiSource;
	author: string | null;
	title: string;
	description: string | null;
	url: string;
	urlToImage: string | null;
	publishedAt: string;
	content: string | null;
  time: string,
  analysed: {
    score: number;
    comparative: number;
    calculation: [];
    tokens: string[];
    words: string[];
    positive: string[];
    negative: string[];
  };
}

export interface INewsApiSourcesResponse {
	status: ApiNewsResponseStatus;
	code?: string;
	error?: string;
	sources: Array<INewsApiSourceItem>;
}

export interface INewsApiHeadlinesResponse {
  status: ApiNewsResponseStatus;
  totalResults: number;
  articles: INewsApiArticle[];
  error?: string;
  code?: string;
}

export interface ISources {
  country: string
}

export interface IHeadlines {
  title: string
}

export interface ISentimentAnalysis {
  positive: INewsApiArticle[];
  neutral: INewsApiArticle[];
  negative: INewsApiArticle[];
}

type sourcesType = {
  country: string,
  apiKey: string | undefined
}

type headlinesType = {
  sources: string,
  sortBy: string,
  apiKey: string | undefined
}

export type axiosRequestType = INewsApiSourcesResponse | INewsApiHeadlinesResponse;

export type configType = sourcesType | headlinesType;

export interface Icountries {
  country: string;
  mood: string;
  count: string;
}

export interface Ititles {
  source: string;
  mood: string;
  count: string;
}

export type Idates = {
  stamp: number,
  mood: string,
  count: string,
}

export type dateProp = {
  stamp: string,
  positive: number,
  neutral: number,
  negative: number,
}

export type moodProps = {
  country?: string;
  source?: string;
  moods: {[x: string]: string};
  sum: number;
  dominant: dataProps;
}

export type dataProps = {mood: string, count: number};

