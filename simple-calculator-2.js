// First of all select all elements...
const display1Ele = document.querySelector('.display-1')
const display2Ele = document.querySelector('.display-2')
const tempResultEle = document.querySelector('.temp-result')
const numberEle = document.querySelectorAll('.number')
const operationEle = document.querySelectorAll('.operation') 
const equalEle = document.querySelector('.equal')
const clearAllEle = document.querySelector('.all-clear')
const delEle = document.querySelector('.last-entity-clear')


// Take some variables...
let dis1Num = ''
let dis2Num = ''
let result = null
let lastoperation = ''
let haveDot = false


// loop for displaying number and dot
numberEle.forEach(number =>{
    number.addEventListener('click', (e)=>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true
        }
        else if(e.target.innerText === '.' && haveDot){
            return;
        }
        dis2Num += e.target.innerText  // e function ta kaj korve jokon innertext e target korbo that means click korbo..
        display2Ele.innerText = dis2Num
    })
})


// loop for displaying various operations...
operationEle.forEach(operation => {
    operation.addEventListener('click', (e)=>{
        if(!dis2Num) return
       haveDot = false

       const operationName = e.target.innerText
       
       if(dis1Num && dis2Num && lastOperation){
           mathOperation()
       }
       else{
           result = parseFloat(dis2Num)
       }

       clearvar(operationName)
       lastOperation = operationName
       
    })
})


// for update display result
function clearvar(name = ''){
    dis1Num += dis2Num+ ' ' + name + ' '
    display1Ele.innerText = dis1Num
    display2Ele.innerText = ''
    dis2Num = ''
    tempResultEle.innerText = result
}


// for math operation...
function mathOperation(){
    if(lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(dis2Num)
    }

    else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num)
    }
    else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num)
    }
    else if(lastOperation === '/'){
        result =eval(result/dis2Num) 
    }
    else if(lastOperation === '%'){
        result = parseFloat(result) % parseFloat(dis2Num)
    }
    
}


// for equal...
equalEle.addEventListener('click', (e)=> {
    if(!dis1Num || !dis2Num) return  // || or sign..
    haveDot = false
    mathOperation()
    clearvar()
    display2Ele.innerText = result
    tempResultEle.innerText = ''
    dis2Num = result
    dis1Num = ''
})



// for all clear(AC)
clearAllEle.addEventListener('click', (e)=>{
    display1Ele.innerText = '0'
    display2Ele.innerText = '0'
    dis1Num = ''
    dis2Num = ''
    result = ''
    tempResultEle.innerText = '0'
})


// for CE
delEle.addEventListener('click', (e)=>{
    display2Ele.innerText = ''
    dis2Num = ''

   
})





// To connect with keyboard...
window.addEventListener('keydown', (e)=>{
    if(
        // keyboard button
        e.key === '0' ||  // || = or symbol
        e.key === '1' ||
        e.key === '2' ||  
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.' 
    ){
        clickButtonEle(e.key)
    }

    else if(
        // e.key === '*'|| // it doesn't work...
        e.key === '+'||
        e.key === '-'||
        e.key === '/'||
        e.key === '%'

    ){
        clickOperation(e.key)
    }

    else if(e.key === '*'){
        clickOperation('X')
    }

    else if(e.key == 'Enter' || e.key == "="){
        clickEqual()
    }

    else if(e.key === 'Delete'){
        allClear()
    }

   
    
})

function clickButtonEle(key){
    numberEle.forEach(button =>{
        if(button.innerText === key){
            button.click()
        }
    })
}


function clickOperation(key){
    operationEle.forEach(button =>{
        if(button.innerText === key){
            button.click()
        }
    })
}


function clickEqual(){
    equalEle.click()  // equal sodo aktai tai for each er dorker nai. and select o kora hoicilo queryselector dia...
}

function allClear(){
    clearAllEle.click()
} 




