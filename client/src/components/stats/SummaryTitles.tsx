interface IsummaryTitles {
  happy: string[],
  sad: string[],
}

const SummaryTitles = ({happy, sad}: IsummaryTitles) => {
  return (
    <div className="summary-container">
      <h6>summary</h6>
      <ul>
        <li>
          <div className="summary-box titles">
            <ul id="sub-list">
              <li>
                the most <br/><span>positive</span> <br/> news <br/> providers
              </li>
              <li>
                <ol className="ordered-list">
                  {happy.map(el => <li><span>{cleanData(el)}</span></li>)}
                </ol>
              </li>
            </ul>
          </div>
        </li>
        <li>
        <div className="summary-box titles">
            <ul id="sub-list">
              <li>
                the most <br/><span>negative</span> <br/> news <br/> providers
              </li>
              <li>
                <ol className="ordered-list">
                  {sad.map(el => <li><span>{cleanData(el)}</span></li>)}
                </ol>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

const cleanData = (element: string) => {
  return element.replaceAll("-", " ");
}

export default SummaryTitles;
