interface IsummaryTitles {
  happy: string[],
  sad: string[],
}

const SummaryTitles = ({happy, sad}: IsummaryTitles) => {
  return (
    <div className="summary-countries">
      <h6>summary</h6>
      <ol>
        <li>
          the most <span>positive</span> news comes from
          <ul className="sub-list">
            {happy.map(el => <li><span>{cleanData(el)}</span></li>)}
          </ul>
        </li>
        <li>news titles to <span>avoid</span> are
          <ul className="sub-list">
            {sad.map(el => <li><span>{cleanData(el)}</span></li>)}
          </ul>
        </li>
      </ol>
    </div>
  )
}

const cleanData = (element: string) => {
  return element.replaceAll("-", " ")
}

export default SummaryTitles;
