import React from 'react';
import bubbleSortHelper from '../../algorithms/bubbleSort.js';
import selectionSortHelper from '../../algorithms/selectionSort.js';
import insertionSortHelper from '../../algorithms/insertionSort.js';
import './sorting-visualiser.styles.scss';

const ANIMATION_SPEED = 2;
const NUMBER_OF_BARS = 225;
const PRIMARY_COLOR = 'darksalmon';

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class SortingVisualiser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      isDisabled: false
    }
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      array.push(randomIntFromInterval(5, 650));
    }
    console.log(array);
    this.setState({array})
  }

  bubbleSort() {
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
        }, i * ANIMATION_SPEED * 0.5)
      }

      bar1.style.backgroundColor = PRIMARY_COLOR;
      bar2.style.backgroundColor = PRIMARY_COLOR;
    }
  }

  selectionSort() {
    const animations = selectionSortHelper(this.state.array);
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < animations.length; i++) {
      const [barOneId, barTwoId, h1, h2] = animations[i];
    
      let bar1 = arrayBars[barOneId];
      let bar2 = arrayBars[barTwoId];

      if (h1 > h2) {
        setTimeout(() => {
          bar1.style.height = `${h2}px`;
          bar2.style.height = `${h1}px`;
        }, i * ANIMATION_SPEED * 20)
      }

      bar1.style.backgroundColor = PRIMARY_COLOR;
      bar2.style.backgroundColor = PRIMARY_COLOR;
    }
  }

  insertionSort() {
    const animations = insertionSortHelper(this.state.array);
    console.log(animations);
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < animations.length; i++) {
      const [barOneId, barTwoId, h1, h2] = animations[i];
    
      let bar1 = arrayBars[barOneId];
      let bar2 = arrayBars[barTwoId];

      if (h1 > h2) {
        setTimeout(() => {
          bar1.style.height = `${h2}px`;
          bar2.style.height = `${h1}px`;
        }, i * ANIMATION_SPEED * 0.5)
      }

      bar1.style.backgroundColor = PRIMARY_COLOR;
      bar2.style.backgroundColor = PRIMARY_COLOR;
    }
  }

  render() {
    const { array, isDisabled } = this.state;

    return (
      <div className='sorting-visualiser'>
        <div className='header-container'>
          <div className='title-container'>
            <h1 className='title'>SORTING ALGORITHM VISUALISER</h1>
          </div>
          <div className='button-container'>
            <button className='button' disabled={isDisabled} onClick={() => this.resetArray()}>Generate New Array</button>
            <button className='button' onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button className='button' onClick={() => this.selectionSort()}>Selection Sort</button>
            <button className='button' onClick={() => this.insertionSort()}>Insertion Sort</button>
            <button className='button' onClick={() => console.log('MERGE SORT')}>Merge Sort</button>
            <button className='button' onClick={() => console.log('QUICK SORT')}>Quick Sort</button>
          </div>
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