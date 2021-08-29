interface IsummaryCountry {
  happy: string,
  sad: string,
};

const SummaryCountries = ({happy, sad}: IsummaryCountry) => {
  console.log("happy ", happy, " sad ", sad);
  const happy2 = happy === "" ? "does not exist" : happy;
  return (
    <div className="summary-container">
      <h6>summary</h6>
      <ul>
        <li>
          <div className="summary-box">
            the <span>happiest</span> news is from: <br/>
            <span id="important">{happy2}</span>
          </div>
        </li>
        <li>
        <div className="summary-box">
            the <span>saddest</span> news is from: <br/>          
            <span id="important">{sad}</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SummaryCountries;
