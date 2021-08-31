import {MONTHS_LONG} from '../../../config/constants';

interface IanalysisSummary {
  best: number[];
  worst: number[];
}

const SummaryWorld = ({best, worst}: IanalysisSummary) => {
  const isPosEmpty = best[1] === 13 ? true : false;
  const isNegEmpty = worst[1] === 13 ? true : false;

  return (
    <div className="summary-container">
      <h6>summary:</h6>
      <ul>
        <li>
          {isPosEmpty ?
          <EmptyBox month={MONTHS_LONG[best[0]]} txt={"happiest"} /> 
          :
          <div className="summary-box">
            the <span>happiest</span> months are: <br/>
            <span id="important">{MONTHS_LONG[best[0]]}</span> and <span id="important">{MONTHS_LONG[best[1]]}</span>
          </div>}
        </li>
        <li>
          {isNegEmpty ?
          <EmptyBox month={MONTHS_LONG[worst[0]]} txt={"saddest"} />
          :
          <div className="summary-box">
            the <span>saddest</span> months are: <br/>          
            <span id="important">{MONTHS_LONG[worst[0]]}</span> and <span id="important">{MONTHS_LONG[worst[1]]}</span>
          </div>}
        </li>
      </ul>
    </div>
  )
}

type emptyBoxProps = {
  month: string,
  txt: string,
}

const EmptyBox = ({month, txt}: emptyBoxProps) => {
  return (
    <div className="summary-box">
      the <span>{txt}</span> month so far is: <br/>
        <span id="important">{month}</span>
    </div>
  )
}

export default SummaryWorld;
