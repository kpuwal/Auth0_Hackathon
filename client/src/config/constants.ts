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