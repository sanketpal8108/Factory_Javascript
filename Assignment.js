const sumOfNumbers = (...numbers) =>{
    if(typeof numbers == 'number'){
        return -1
    }
    let temp =0
    for(i =0 ;i<numbers.length ; i++){
        temp+= numbers[i]
    }
    return temp
}
const substractionOfNumbers = (...numbers) =>{
    if(typeof numbers == 'number'){
        return -1
    }
    let temp =numbers[0]
    for(i =1 ;i<numbers.length ; i++){
        temp-= numbers[i]
    }
    return temp
}
const divisionOfNumbers = (...numbers) =>{
    if(typeof numbers == 'number'){
        return -1
    }
    let temp =numbers[0]
    for(i =1 ;i<numbers.length ; i++){
        temp /= numbers[i]
    }
    return temp
}
const multiplicationOfNumbers = (...numbers) =>{
    if(typeof numbers == 'number'){
        return -1
    }
    let temp =1
    for(i =0 ;i<numbers.length ; i++){
        temp*= numbers[i]
    }
    return temp
}
const ceil = (number1,number2) =>{
    if(typeof numbers == 'number'){
        return -1
    }
    let temp =0
    temp = Math.ceil(number1/number2)
    return temp
}
const floor = (number1,number2) =>{
    if(typeof numbers == 'number'){
        return -1
    }
    let temp =0
    temp = Math.floor(number1/number2)
    return temp
}
const factorial = (number1)=>{
    if(typeof numbers == 'number'){
        return -1
    }
    let temp = 1
    for(i =number ; i>0;i--){
        temp *=number
    }
    return temp
}
const factory = (operation) => {
    switch(operation){
        default:
            return 'Error'
        case 'add':
            return sumOfNumbers
        case 'substraction':
            return substractionOfNumbers
        case 'multiplication':
            return multiplicationOfNumbers
        case 'division':
            return divisionOfNumbers
        case 'ceil':
            return ceil
        case 'floor':
            return floor
        case 'factorial':
            return factorial

    }
}
console.log(factory('add'));
