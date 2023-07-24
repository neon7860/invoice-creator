const inputTask = document.getElementById('input-task')
const submitInvoice = document.getElementById('submit-invoice')
const selectAmount = document.getElementById('select-amount')
const addBtn = document.getElementById('add-btn')
const taskEL = document.getElementById('task-el')
const amountEl = document.getElementById('amount-el')
const totalEl = document.getElementById('total-el')
const amountsEl = document.getElementsByClassName('amount-el')
const container = document.getElementById('container')
let arr = []
let sum

submitInvoice.addEventListener('click', submit)

addBtn.addEventListener('click', function(){
    if (inputTask.value){
        arr.push([inputTask.value, parseInt(selectAmount.value)])
    }
    render(arr)
})

function render(arr){
    taskEL.innerHTML = ""
    amountEl.innerHTML = ""
    // console.log(arr)
    
    for (let item of arr){
        let strTask = `<div class="taskItem"><li>${item[0]}</li>
        <span onClick="removeElement(${arr.indexOf(item)})" class="remove-el">Remove</span></div>`
        let strAmount = `<li>£${item[1]}</li>`
        taskEL.innerHTML += strTask
        amountEl.innerHTML += strAmount
    }
        totalEl.innerHTML = `£${getTotal()}`
}

function getTotal(){
    sum = 0
    for (let item of arr){
        sum += item[1]
    }
    return sum
}

function removeElement(index){
    arr.splice(index, 1)
    render(arr)
}


function submit(){
    arr = []
    selectAmount.value = "10"
    inputTask.value = ""
    render(arr)
}