import { countryProp } from '../../redux/types';
import { HappyIcn, NeutralIcn, NegativeIcn } from './Icons';
import { COUNTRIES } from '../../config/constants';
import Bar from './chart/Bar';

const posX = 15;

const findCountryLabel = (country: string) => {
  const countryObj = COUNTRIES.find(obj => {return obj.iso === country});
  return countryObj?.label;
}

const BarGroup = ({ moods, country, sum }: countryProp) => {
  return (
    <svg width={300} height={200} viewBox={`0 0 200 160`}>
      {/* positive */}
      <Bar mood={moods.positive} barX={-70} valX={131} />
      <HappyIcn scale={0.6} posX={132} posY={103} />

      {/* neutral */}
      <Bar mood={moods.neutral} barX={-45} valX={156} />
      <NeutralIcn scale={0.6} posX={158} posY={103} />

      {/* negative */}
      <Bar mood={moods.negative} barX={-20} valX={181} />
      <NegativeIcn scale={0.6} posX={183} posY={103} />

      <g>
        <text className="name-label-bold" x={posX} y={posX}alignmentBaseline="middle">{findCountryLabel(country)}</text>
        <text className="name-label" x={posX} y={50} alignmentBaseline="middle">number of headlines </text>
        <text className="name-label" x={posX} y={60} alignmentBaseline="middle">analysed: </text>
        <text className="name-label-bold" x={53} y={62} alignmentBaseline="middle">{sum}</text>
        <text className="name-label" x={posX} y={80} alignmentBaseline="middle">dominant mood: </text>
      </g>
    </svg>
  )
}

export default BarGroup;