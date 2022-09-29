let keys = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let cancelKey = document.querySelector('.cancel-key');
let opKeys = document.querySelectorAll('.op');
let eqKey = document.querySelector('.eq-key');

keys.forEach(key => {

    key.addEventListener('click', e => {

        let displayDiv = document.createElement('div');
        displayDiv.classList.add(`display-key`);
        displayDiv.textContent = key.textContent;
        displayDiv.style.color = "blue";
        display.appendChild(displayDiv);

    })

})

cancelKey.addEventListener('click', e => {

    console.log(display.textContent.split(' '));
    display.innerHTML = '';

    function handleClick(e) {
 
        let dArr = display.textContent.split(' ');
        let result;
            
        switch (dArr[1]) {
            case '+':
                result = parseInt(dArr[0]) + parseInt(dArr[2]); 
                break;
            case '-':
                result = parseInt(dArr[0]) - parseInt(dArr[2]); 
                break;
            case '*':
                result = parseInt(dArr[0]) * parseInt(dArr[2]); 
                break;
            case '/':
                result = parseInt(dArr[0]) / parseInt(dArr[2]); 
                break;
                                
        }
            
        dArr.splice(0, 3, result);
        console.log(dArr)
            
        let displayDiv = document.createElement('div');
        displayDiv.classList.add(`display-key`);
        displayDiv.textContent = ' ' + '=' + ' ' + result + ' ';
        displayDiv.style.color = "blue";
        display.appendChild(displayDiv);   
        
        eqKey.removeEventListener('click', handleClick)
        
    }

    eqKey.addEventListener('click', handleClick)



})

opKeys.forEach(key => {

    key.addEventListener('click', e => {

        let displayDiv = document.createElement('div');
        displayDiv.classList.add(`display-key`);
        displayDiv.textContent = ' ' + key.textContent + ' ';
        displayDiv.style.color = "blue";
        display.appendChild(displayDiv);

    })

})

function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}


