interface Iicon {
  scale: number;
  posX: number;
  posY: number;
};

export const HappyIcn = ({scale, posX, posY}: Iicon) => {
  return (
    <g transform={`translate(${posX}, ${posY}) scale(${scale} ${scale})`}>
      <path d="M0 0h24v24H0V0z" fill="#ffffff"/>
      <circle cx="15.5" cy="9.5" r="1.5"/>
      <circle cx="8.5" cy="9.5" r="1.5"/>
      <path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
    </g>
  )
}

export const NeutralIcn = ({scale, posX, posY}: Iicon) => {
  return (
    <g transform={`translate(${posX}, ${posY}) scale(${scale} ${scale})`}>
      <path d="M0 0h24v24H0z" fill="#ffffff"/>
      <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
    </g>
  )
}

export const NegativeIcn = ({scale, posX, posY}: Iicon) => {
  return (
    <g transform={`translate(${posX}, ${posY}) scale(${scale} ${scale})`}>
      <path d="M0 0h24v24H0V0z" fill="#ffffff"/>
      <circle cx="15.5" cy="9.5" r="1.5"/>
      <circle cx="8.5" cy="9.5" r="1.5"/>
      <path d="M12 14c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5zm-.01-12C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
    </g>
  )
}

export const SpeechBubble = ({scale, posX, posY}: Iicon) => {
  return (
    <g transform={`translate(${posX + 30}, ${posY - 35}) scale(${scale + .2} ${scale + .2})`}>
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="#1f1f1f" />
    </g>
  )
}
