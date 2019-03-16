import * as React from 'react';
import WallQuadrant from './components/WallQuadrant';
import VerticalAxis from './components/VerticalAxis';
import HorizontalAxis from './components/HorizontalAxis';
import './css/App.css';

class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <div className='wall_container'>
          <VerticalAxis />
          <div className='graph_area'>
            <div className='graph_area_horizontal_half'>
              <WallQuadrant quadrant={2}/>
              <WallQuadrant quadrant={1}/>
            </div>
            <div className='graph_area_horizontal_half'>
              <WallQuadrant quadrant={3}/>
              <WallQuadrant quadrant={4}/>
            </div>
            <HorizontalAxis />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
