import classificationIcn from '../../assets/classification.png';
import statsIcn from '../../assets/stats.png';

const MainBg = () => {
  return (
    <div className="main-bg-container">
      <h1>Sentiment Analysis <br/> powered news reader</h1><br/>
      <h5>helps avoid bad news and be happy</h5>
      <div className="main-bg-box-container">
        <div className="main-bg-box">
          <img
              src={classificationIcn}
              alt="classification icon"
              style={{
                width: 60,
                height: 60,
              }}
            />
          <h6>classification</h6>
          <p>for an easy navigation the news are classified into three mood categories </p>
        </div>
        <div className="main-bg-box">
          <img
            src={statsIcn}
            alt="classification icon"
            style={{
              width: 60,
              height: 60,
            }}
          />
          <h6>statistics</h6>
          <p>create an account and enjoy a comfort of an informed choice</p>
        </div>
      </div>
    </div>
  )
}

export default MainBg;