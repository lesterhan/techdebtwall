import * as React from 'react'
import '../css/WallQuadrant.css'

export interface Props {
  quadrant: number;
}

function WallQuadrant({quadrant}: Props) {
  return (
    <div className='quadrant'>
      This is quadrant number {quadrant}
    </div>
  )
}

export default WallQuadrant;