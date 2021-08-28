interface IsummaryCountry {
  happy: string,
  sad: string,
};

const SummaryCountries = ({happy, sad}: IsummaryCountry) => {
  return (
    <div className="summary-countries">
      <h6>summary</h6>
      <ol>
        <li> the <span>happiest</span> news comes from <span>{happy}</span></li>
        <li>the <span>saddest</span> news are written in <span>{sad}</span>
        </li>
      </ol>
    </div>
  )
}

export default SummaryCountries;
