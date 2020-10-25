import React from 'react';
import bubbleSortHelper from '../../algorithms/bubbleSort.js';
import './sorting-visualiser.styles.scss';

const ANIMATION_SPEED = 3;
const NUMBER_OF_BARS = 150;
const PRIMARY_COLOR = 'grey';

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class SortingVisualiser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    }
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      array.push(randomIntFromInterval(1, 750));
    }
    console.log(array);
    this.setState({array})
  }

  async bubbleSort() {
    const animations = bubbleSortHelper(this.state.array);
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < animations.length; i++) {
      const [barOneId, barTwoId, h1, h2] = animations[i];

      let bar1 = arrayBars[barOneId];
      let bar2 = arrayBars[barTwoId];

      if (h1 > h2) {
        setTimeout(() => {
          bar1.style.height = `${h2}px`;
          bar2.style.height = `${h1}px`;
        }, i * ANIMATION_SPEED)
      }

      bar1.style.backgroundColor = PRIMARY_COLOR;
      bar2.style.backgroundColor = PRIMARY_COLOR;
    }
  }

  render() {
    const { array } = this.state;

    return (
      <div className='sorting-visualiser'>
        <div className='title'>
          <h1>SORTING ALGORITHM VISUALISER</h1>
        </div>
        <div className='button-container'>
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        </div>
        <div className='array-container'>
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
              }}></div>
          ))}
        </div>
      </div>
    )
  }
}

export default SortingVisualiser;