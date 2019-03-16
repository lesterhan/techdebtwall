import * as React from 'react'
import '../css/WallQuadrant.css'

export interface Props {
  quadrant: number;
}

function WallQuadrant({quadrant}: Props) {
  return (
    <div className={'quadrant ' + 'quadrant_number_' + quadrant}>
      This is quadrant number {quadrant}
    </div>
  )
}

export default WallQuadrant;