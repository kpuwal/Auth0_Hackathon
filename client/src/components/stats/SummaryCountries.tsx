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
          { 
            happy === "" ?
            <EmptyBoxHappy />
            :
            <div className="summary-box">
              the <span>happiest</span> news is from: <br/>
              <span id="important">{happy}</span>
            </div>
          }
        </li>
        <li>
          {
            sad === "" ?
            <EmptyBoxSad />
            :
            <div className="summary-box">
              the <span>saddest</span> news is from: <br/>          
              <span id="important">{sad}</span>
            </div>
          }
        </li>
      </ul>
    </div>
  )
}

const EmptyBoxHappy = () => {
  return (
    <div className="summary-box">
      <span>oh no! <br/>nothing to see here...</span>
    </div>
  )
}

const EmptyBoxSad = () => {
  return (
    <div className="summary-box">
      <span>hurray! <br/>nothing to see here</span>
    </div>
  )
}

export default SummaryCountries;
