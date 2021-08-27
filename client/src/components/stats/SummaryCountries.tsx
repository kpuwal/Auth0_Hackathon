interface IsummaryCountry {
  happy: string,
  sad: string,
};

const SummaryCountries = ({happy, sad}: IsummaryCountry) => {
  return (
    <div className="summary-countries">
      <h6>summary</h6>
      <ul >
        <li> the<span>happiest</span> news comes from: <span>{happy}</span></li>
        <li>the<span>saddest</span> news comes from: <span>{sad}</span>
        </li>
      </ul>
    </div>
  )
}

export default SummaryCountries;
