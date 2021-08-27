export type countryType = {
  iso: string,
  label: string,
}

export const COUNTRIES: countryType[] = [
  { iso: "gb", label: "great britain" },
  { iso: "us", label: "united states" },
  { iso: "au", label: "australia" },
  { iso: "ca", label: "canada" },
]

export const MONTHS: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const MONTHS_LONG: string[] = [
  "January",
  "Febuart",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];