import React,{Component} from 'react';
import App from '../App';   
class ClassCounter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState(prevState=>({count:prevState.count+1}));
    };
    decrement=()=>{
        this.setState(prevState=>({count:Math.max(prevState.count-1,0)}));
    }

    render(){
        return(
            <div className="counter-container">
                <h2>Class Counter</h2>
                <div className="count-display">{this.state.count}</div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
export default ClassCounter;