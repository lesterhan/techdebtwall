import * as React from 'react'
import '../css/Axes.css'

function VerticalAxis() {
  return (
    <div className='vertical_axis'>
      <div className='vertical_high_marker'>
        <span className='marker'>
          High
        </span>
      </div>
      <div className='vertical_axis_label'>
        <span>
          Value
        </span>
      </div>
      <div className='low_marker'>
        <span className='marker'>
          Low
        </span>
      </div>
    </div>
  )
}

export default VerticalAxis;
