import { HappyIcn, NegativeIcn } from "./Icons"

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
            {/* <svg width={15} height={15}>
              <HappyIcn scale={.6} posX={0} posY={-1} />
            </svg> */}
            the <span>happiest</span> news is from: <br/>
            <span id="important">{happy}</span>
          </div>
        </li>
        <li>
        <div className="summary-box">
            {/* <svg width={15} height={15}>
              <NegativeIcn scale={.6} posX={0} posY={-1} />
            </svg> */}
            the <span>saddest</span> news is from: <br/>          
            <span id="important">{sad}</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SummaryCountries;
