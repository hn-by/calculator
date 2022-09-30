let keys = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let cancelKey = document.querySelector('.cancel-key');
let opKeys = document.querySelectorAll('.op');
let eqKey = document.querySelector('.eq-key');


eqKey.addEventListener('click', handleClickEqual)

keys.forEach(key => {

    key.addEventListener('click', handleClickNumKey)

})

cancelKey.addEventListener('click', handleClickCancelKey)

opKeys.forEach(key => {

    key.addEventListener('click', handleClickOpKey)

})


function handleClickCancelKey(e) {
    
    console.log(display.textContent.split(' '));
    display.innerHTML = '';

    eqKey.addEventListener('click', handleClickEqual);
    keys.forEach(key => {

        key.addEventListener('click', handleClickNumKey)
    
    })
    opKeys.forEach(key => {

        key.addEventListener('click', handleClickOpKey)
    
    })

}

function handleClickOpKey(e) {
    
    let displayDiv = document.createElement('div');
    displayDiv.classList.add(`display-key`);
    displayDiv.textContent = ' ' + e.target.textContent + ' ';
    displayDiv.style.color = "white";
    display.appendChild(displayDiv);

    opKeys.forEach(key => {

        key.removeEventListener('click', handleClickOpKey)
    
    })

}

function handleClickEqual(e) {
 
    let result = handleNum()
        
    let displayDiv = document.createElement('div');
    displayDiv.classList.add(`display-key`);
    display.innerHTML = ' ';
    displayDiv.textContent = (result || ' ');
    displayDiv.style.color = "white";
    display.appendChild(displayDiv);   
    
    eqKey.removeEventListener('click', handleClickEqual);
    keys.forEach(key => {

         key.removeEventListener('click', handleClickNumKey)
    
     })
    opKeys.forEach(key => {

        key.removeEventListener('click', handleClickOpKey)
    
    })
      
}

function handleClickNumKey(e) {

    let displayDiv = document.createElement('div');
    displayDiv.classList.add(`display-key`);
    displayDiv.textContent = e.target.textContent;
    displayDiv.style.color = "white";
    display.appendChild(displayDiv);

    opKeys.forEach(key => {

        key.addEventListener('click', handleClickOpKey)
    
    })

}


function handleNum() {
    
    let dArr = display.textContent.split(' ');
    let result;
    
    while(dArr[2]) {

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

    }
        
    
    console.log(dArr)

    return result;

}

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
