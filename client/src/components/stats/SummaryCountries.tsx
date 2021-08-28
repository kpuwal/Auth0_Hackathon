interface IsummaryCountry {
  happy: string,
  sad: string,
};

const SummaryCountries = ({happy, sad}: IsummaryCountry) => {
  return (
    <div className="summary-container">
      <h6>summary</h6>
      <ul>
        <li>
          <div className="summary-box">
            the <span>happiest</span> news comes from: <br/><span id="important">{happy}</span>
          </div>
        </li>
        <li>
        <div className="summary-box second">
            the <span>saddest</span> news comes from: <br/><span id="important">{sad}</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SummaryCountries;
