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
            <div className="sub-list">
              <div>
                the most <br/><span>positive</span> <br/> news <br/> providers
              </div>
              <div>
                <ol className="ordered-list">
                  {happy.map((el, idx) => <li key={idx}><span>{cleanData(el)}</span></li>)}
                </ol>
              </div>
            </div>
          </div>
        </li>
        <li>
        <div className="summary-box titles">
            <div className="sub-list">
              <div>
                the most <br/><span>negative</span> <br/> news <br/> providers
              </div>
              <div>
                <ol className="ordered-list">
                  {sad.map((el, idx) => <li key={idx}><span>{cleanData(el)}</span></li>)}
                </ol>
              </div>
            </div>
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
