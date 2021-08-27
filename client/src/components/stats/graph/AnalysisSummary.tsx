import {MONTHS_LONG} from '../../../config/constants';

interface IanalysisSummary {
  best: number[];
  worst: number[];
}

const AnalysisSummary = ({best, worst}: IanalysisSummary) => {
  return (
    <div style={{paddingTop: "4vh", paddingLeft: "4vh"}}>
      <p>this year summary:</p>
      <p>the happiest months: {MONTHS_LONG[best[0]]} & {MONTHS_LONG[best[1]]}</p>
      <p>least happy months: {MONTHS_LONG[worst[0]]} & {MONTHS_LONG[worst[1]]}</p>
    </div>
  )
}

export default AnalysisSummary;
