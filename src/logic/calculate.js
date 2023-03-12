import operate from "./operate";
import Big from "big.js";
export  default function calculate(state,buttonItem){
   // console.log('operation: %s, next: %s, current: %s',state.operation,state.next,state.current);
 
    switch(buttonItem.operation){
        case "clear":
            {
                return {
                    operation:null,
                    next:null,
                    current:null
                };
            }
        case "inverse":
            {
                if(state.next!=null){ 
                    var result = (-1 * parseFloat(state.next)).toString();
                    return {
                    next:result
                 };
                }
                else{
                    var result = (-1 * parseFloat(state.current)).toString();
                    return {
                        current:result
                     };
                }
            }
        case "percentage":
            {
                if(state.next!=null){ 
                    return {
                    next: Big(state.next)
                    .div(Big("100"))
                    .toString(),
                 };
                }
                else{
                    return {
                        current:Big(state.current)
                        .div(Big("100"))
                        .toString(),
                     };
                }
            }
        case "divide":
            {
                if(state.current!=null){
                    return{
                        operation:'divide'
                    };
                }
            }
            break;
        case "add":
            {
                if(state.current!=null){
                    return{
                        operation:'add'
                    };
                } 
            }
            break;
        case "subtract":
            {
                if(state.current!=null){
                    return{
                        operation:'subtract'
                    };
                }
            }
            break;
        case "decimal":
            {}
            break;
        case "multiply":
            {
                if(state.current!=null){
                    return{
                        operation:'multiply'
                    };
                }
            }
            break;
        case "number":
            {
                if(state.operation!=null){
                    if(state.next!=null){
                        //console.log('next concat: %s',state.next.concat(buttonItem.display));
                        var result=state.next.concat(buttonItem.display);
                        return{
                            next:result
                        };
                    }
                    else {
                        //console.log('next: %s',buttonItem.display);
                        return{
                            next:buttonItem.display
                        };
                    }
                    
                }
                else{
                    if(state.current!=null){ 
                        //console.log('current concat: %s',state.current.concat(buttonItem.display));
                        var result=state.current.concat(buttonItem.display);
                        return{
                            current:result
                        };}
                        else {
                            //console.log('current: %s',buttonItem.display);
                            return{
                                current:buttonItem.display
                            };
                        }
                }
            }
        case "equal":
            {
                var result = operate(state.current,state.next,state.operation).toString();
                return {
                    current:result,
                    next:null,
                    operation:null
                }
            }

    }
}

