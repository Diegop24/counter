import React, {Component} from 'react'
class Calculadora extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0
      };
    }
  
    render() {
      if(this.state.count>=0){
        return (
          <div className='position-sticky col-sm-5'>
            <p className= 'text-success '>
            <h1>Calculadora</h1> </p>
              <p class='fs-2'>{this.state.count}</p>
                <button className="btn btn-outline-success" onClick={() => this.setState({ count: this.state.count + 1 })}>
              +
            </button>
               <button className="btn btn-outline-danger" onClick={() => this.setState({ count: this.state.count + 2 })}>
              2
            </button>
               <button className="btn btn-outline-success" onClick={() => this.setState({ count: this.state.count - 1 })}>
              -
            </button>
          </div>
        );    
      }else if (this.state.count==-1){
        this.setState({ count: this.state.count +1 })
        return (
          <div className='position-sticky col-sm-5'>
            <button  onClick={() => this.setState({ count: this.state.count + 1 })}>
              +
            </button>
              <button onClick={() => this.setState({ count: this.state.count + 2 })}>
              2
            </button>
              <button onClick={() => this.setState({ count: this.state.count - 1 })}>
              -
            </button>
          </div>
        );
      }
      
    }
  }

  export default Calculadora;


