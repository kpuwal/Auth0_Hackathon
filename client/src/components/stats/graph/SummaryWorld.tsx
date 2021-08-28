import {MONTHS_LONG} from '../../../config/constants';
// import { HappyIcn, NegativeIcn } from "../Icons"

interface IanalysisSummary {
  best: number[];
  worst: number[];
}

const SummaryWorld = ({best, worst}: IanalysisSummary) => {
  return (
    <div className="summary-container">
      <h6>summary:</h6>
      <ul>
        <li>
          <div className="summary-box">
            {/* <svg width={14} height={14}>
              <HappyIcn scale={.6} posX={0} posY={-1} />
            </svg> */}
            the <span>happiest</span> months are: <br/>
            <span id="important">{MONTHS_LONG[best[0]]}</span> and <span id="important">{MONTHS_LONG[best[1]]}</span>
          </div>
        </li>
        <li>
        <div className="summary-box">
            {/* <svg width={15} height={15}>
              <NegativeIcn scale={.6} posX={0} posY={-1} />
            </svg> */}
            the <span>saddest</span> months are: <br/>          
            <span id="important">{MONTHS_LONG[worst[0]]}</span> and <span id="important">{MONTHS_LONG[worst[1]]}</span>
          </div>
        </li>
      </ul>
      {/* <ol>
        <li>the <span>happiest</span> months: <span>{MONTHS_LONG[best[0]]}</span>, <span>{MONTHS_LONG[best[1]]}</span></li>
        <li>the <span>saddest</span> months: <span>{MONTHS_LONG[worst[0]]}</span>, <span>{MONTHS_LONG[worst[1]]}</span></li>
      </ol> */}
    </div>
  )
}

export default SummaryWorld;
