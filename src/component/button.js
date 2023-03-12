import  ReactDOM from 'react-dom';
import React from 'react';
import './button.css';

class Button extends React.Component{
    onButtonClick=(buttonItem)=>{
        this.props.onButtonClick(buttonItem);
    }

    handleButtonClick=()=>{
        this.onButtonClick(this.props.buttonItem);
    }
    getClassName=()=>{
        var result =((parseInt(this.props.buttonItem.index)+1)%4);
        if(this.props.buttonItem.display=="0"){
            return "Wide";
        }
        if(result===0){
            console.log(result);
            return 'Operator';
        }
        else{
            console.log(result);
            return 'Button';
        }
    }
    
    render(){
        var class_name= this.getClassName();
        return(
            <div className={class_name} onClick={this.handleButtonClick}>
            {this.props.buttonItem.display}
            </div>
        );
    }
}
export default Button;