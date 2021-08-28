import {MONTHS_LONG} from '../../../config/constants';

interface IanalysisSummary {
  best: number[];
  worst: number[];
}

const SummaryWorld = ({best, worst}: IanalysisSummary) => {
  return (
    <div className="summary">
      <h6>summary:</h6>
      <ol>
        <li>the <span>happiest</span> months: <span>{MONTHS_LONG[best[0]]}</span>, <span>{MONTHS_LONG[best[1]]}</span></li>
        <li>the <span>saddest</span> months: <span>{MONTHS_LONG[worst[0]]}</span>, <span>{MONTHS_LONG[worst[1]]}</span></li>
      </ol>
    </div>
  )
}

export default SummaryWorld;
