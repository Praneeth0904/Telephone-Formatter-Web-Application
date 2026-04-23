 

 const input = document.querySelector("input");

 let firstTwoNumbers = '';
 let previousValue = '';

 input.addEventListener("input",(e)=>{
    const inputValue = e.target.value;
    

    if(inputValue.length === 2 && previousValue.length < inputValue.length){
        firstTwoNumbers = inputValue.substring(0,2);
        input.value = `+(${firstTwoNumbers}) - ${inputValue[inputValue.length - 1]}`;

    }

    previousValue = inputValue;

 });