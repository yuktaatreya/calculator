import React from "react";
import calculate from "../logic/calculate.js";
import Button from './button.js';
import './container.css';
import buttonList from '../constants/constants.js';
class Container extends React.Component{
    state={
        operation:null,
        current:null,
        next:null
    }
    handleClick=(buttonItem)=>{
        var result = calculate(this.state,buttonItem);
        this.setState(result);       
    }
    render(){
        const grid =buttonList.map((row, i) => (
            <div key={i} >
              {row.map((col) => (
                <Button buttonItem={col} key={col.display}  onButtonClick={this.handleClick}/>

              ))}
            </div>
          ));
        return(
            <div>
            <div className="display">
            <div >{this.state.next || this.state.current}</div>
            </div>
            
        <div className="Container">
        {grid}
      </div> 
            </div>
            
        );
    }
}

export default Container;