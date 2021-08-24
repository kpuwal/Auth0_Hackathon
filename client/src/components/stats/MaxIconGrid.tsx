import MaxIcon from "./MaxIcon";
import { maxProp } from '../../redux/types';

interface ImaxIconGrid {
  max: maxProp[];
  main: maxProp;
  second: maxProp;
  third: maxProp;
}

const MaxIconGrid = ({max, main, second, third}: ImaxIconGrid) => {
  return (
    <g>
      {
        max.map((item, idx) => <MaxIcon
          key={idx}
          name={item.mood || "empty"}
          posX={item.posX || 0}
          posY={item.posY || 0}
          txt={item.txtVal}
          maxStyle={"speech-bubble-graph"}
        />)
      }
      <MaxIcon
        name={main.mood || "empty"}
        posX={main.posX || 0}
        posY={main.posY || 0}
        txt={main.txtVal}
        maxStyle={"speech-bubble-graph-maxOne"}/>

      <MaxIcon
        name={second.mood || "empty"}
        posX={second.posX || 0}
        posY={second.posY || 0}
        txt={second.txtVal}
        maxStyle={"speech-bubble-graph-maxTwo"}/>

      <MaxIcon
        name={third.mood || "empty"}
        posX={third.posX || 0}
        posY={third.posY || 0}
        txt={third.txtVal}
        maxStyle={"speech-bubble-graph-maxTwo"}/>
    </g>
  )
}

export default MaxIconGrid;