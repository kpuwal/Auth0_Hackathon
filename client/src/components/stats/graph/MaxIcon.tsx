import MaxIconItem from './MaxIconItem';
import { HappyIcn, NeutralIcn, NegativeIcn, SpeechBubble } from '../Icons';

const iconSize: number = 1.6;

export interface ImaxIcon {
  name: string;
  posX: number;
  posY: number;
  txt: number;
  maxStyle?: string;
}

const MaxIcon = ({name, posX, posY, txt, maxStyle}: ImaxIcon) => {
    switch (name) {
      case "positive":
        return (
          <MaxIconItem {...{posX, posY, txt, maxStyle}}>
            <HappyIcn scale={iconSize} {...{posX, posY}} />
            <SpeechBubble scale={iconSize} {...{posX, posY}} />
          </MaxIconItem>
        )
      case "neutral":
        return (
          <MaxIconItem {...{posX, posY, txt, maxStyle}}>
            <NeutralIcn scale={iconSize} {...{posX, posY}} />
            <SpeechBubble scale={iconSize} {...{posX, posY}} />
          </MaxIconItem>
        )
      case "negative":
        return (
          <MaxIconItem {...{posX, posY, txt, maxStyle}}>
            <NegativeIcn scale={iconSize} {...{posX, posY}} />
            <SpeechBubble scale={iconSize} {...{posX, posY}} />
          </MaxIconItem>
        )
      default:
        return <g></g>
    }
}

export default MaxIcon;
