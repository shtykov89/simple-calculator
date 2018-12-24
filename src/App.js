import React from 'react';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number1: [],
      number2: [],
      operator: '',
      display: 0
    };
  }; 

  numberEnter1(a) {
    const arr1 = this.state.number1;
    arr1.push(a); 
    this.setState({ number1: arr1 }); 
  };
  numberEnter2(c) {
    const arr2 = this.state.number2;
    arr2.push(c);
    this.setState({ number2: arr2 })
  }; 

  operatorEnter(b) {
    this.setState({ operator: b }) 
  };

  clear() {
    this.setState({
      number1: [],
      number2: [],
      operator: '',
      display: 0
    });
  }; 
  numbersEnter(number) {
    if (!this.state.operator.length) {
      this.numberEnter1(number);
      this.setState({ display: this.state.number1 });
    } else {
      this.numberEnter2(number);
      this.setState({ display: this.state.number2 });
    }
  };
  minusEnter1(minus) {
    const arr1 = this.state.number1;
    if (this.state.number1.indexOf('-') === -1) {
      arr1.unshift(minus);
      this.setState({ number1: arr1 });
    } else if (this.state.number1.indexOf('-') === 0) {
      arr1.shift();
      this.setState({ number1: arr1 });
    }
  };
  minusEnter2(minus) {
    const arr2 = this.state.number2;
    if (this.state.number2.indexOf('-') === -1) {
      arr2.unshift(minus);
      this.setState({ number2: arr2 });
    } else if (this.state.number2.indexOf('-') === 0) {
      arr2.shift();
      this.setState({ number2: arr2 });
    }
  };

  minusesEnter(minus) {
    if (!this.state.number2.length) {
      this.minusEnter1(minus)
    } else {
      this.minusEnter2(minus)
    }
  };

  dotEnter1(dot) {
    const arr1 = this.state.number1;
    if (arr1.indexOf('.') !== -1) {
      return;
    }
    if (this.state.display === 0) {
      arr1.unshift(0, dot)
      this.setState({ number1: arr1 })
    } else {
      arr1.push(dot);
      this.setState({ number1: arr1 })
    }
  }
  dotEnter2(dot) {
    const arr2 = this.state.number2;
    if (arr2.indexOf('.') === -1) {
      if (!this.state.number2.length) {
        arr2.unshift(0, dot)
        this.setState({ number2: arr2 })
      } else {
        arr2.push(dot);
        this.setState({ number2: arr2 })
      }
    }
  }
  dotsEnter(dot) {
    if (!this.state.number2.length) {
      this.dotEnter1(dot)
    } else {
      this.dotEnter2(dot)
    }
  }

  solution() {
    if (this.state.operator === '/') {
      this.setState({ display: this.state.number1.join('') / this.state.number2.join('') });
    } else if (this.state.operator === 'x') {
      this.setState({ display: this.state.number1.join('') * this.state.number2.join('') });
    } else if (this.state.operator === '-') {
      this.setState({ display: this.state.number1.join('') - this.state.number2.join('') });
    } else if (this.state.operator === '+') {
      this.setState({ display: +this.state.number1.join('') + +this.state.number2.join('') });
    };
  };


  render() {
    return (
      <div className="body">
        <div className="display">
          <h2>
            {this.state.display}
          </h2>
        </div>
        <div>
          <button type="button" className="btn btn-dark long" onClick={() => { this.clear() }}>AC</button>
          <button type="button" className="btn btn-dark short" onClick={() => { this.minusesEnter('-') }}>+/-</button>
          <button type="button" className="btn btn-warning short" onClick={() => { this.operatorEnter('+') }}>+</button>
        </div>
        <div>
          <button type="button" className="btn btn-secondary short" onClick={() => { this.numbersEnter(1) }}>1</button>
          <button type="button" className="btn btn-secondary short" onClick={() => { this.numbersEnter(2) }}>2</button>
          <button type="button" className="btn btn-secondary short" onClick={() => { this.numbersEnter(3) }}>3</button>
          <button type="button" className="btn btn-warning short" onClick={() => { this.operatorEnter('/') }}>/</button>
        </div>
        <div>
          <button type="button" className="btn btn-secondary short" onClick={() => { this.numbersEnter(4) }}>4</button>
          <button type="button" className="btn btn-secondary short" onClick={() => { this.numbersEnter(5) }}>5</button>
          <button type="button" className="btn btn-secondary short" onClick={() => { this.numbersEnter(6) }}>6</button>
          <button type="button" className="btn btn-warning short" onClick={() => { this.operatorEnter('x') }}>x</button>
        </div>
        <button type="button" className="btn btn-secondary short" onClick={() => { this.numbersEnter(7) }}>7</button>
        <button type="button" className="btn btn-secondary short" onClick={() => { this.numbersEnter(8) }}>8</button>
        <button type="button" className="btn btn-secondary short" onClick={() => { this.numbersEnter(9) }}>9</button>
        <button type="button" className="btn btn-warning short" onClick={() => { this.operatorEnter('-') }}>-</button>
        <div>
          <button type="button" className="btn btn-secondary long" onClick={() => { this.numbersEnter(0) }}>0</button>
          <button type="button" className="btn btn-secondary short" onClick={() => { this.dotsEnter('.') }}>,</button>
          <button type="button" className="btn btn-warning short" onClick={() => { this.solution() }}>=</button>

        </div>
      </div>
    )
  }
}

export default App;
