export default function operate(current,next,operation){
    // console.log('operation: %s, next: %s, current: %s',operation,next,current)
    switch(operation){
        case 'add':{
            return  parseFloat(next) + parseFloat(current);
        }
        case 'multiply':{
            return  parseFloat(next) * parseFloat(current);
        }
        case 'subtract':{
            return  parseFloat(current) - parseFloat(next);
        }
        case 'divide':{
            return  parseFloat(current) / parseFloat(next);
        }
    }
}