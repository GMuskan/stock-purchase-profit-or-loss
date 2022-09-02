var initialPrice = document.querySelector("#initial-price");
var numberOfStocks = document.querySelector("#number-of-stocks");
var currentPrice = document.querySelector("#current-price");
var btnSubmit = document.querySelector("#btn-submit");
var outputBox = document.querySelector("#output-box");

btnSubmit.addEventListener('click', submitHandler);

function submitHandler(){
    var initial = initialPrice.value;
    var quantity = numberOfStocks.value;
    var current = currentPrice.value;
    
    if(initial==='' || quantity==='' || current===''){
        showOutput(`Please fill out all the fields`);
    }else if(initial<=0 || quantity<=0 || current<=0){
        showOutput(`Price or quantity cannot be less than 0`);
    }else{
        initial = Number(initialPrice.value);
        quantity = Number(numberOfStocks.value);
        current = Number(currentPrice.value);
        calculateProfitAndLoss(initial, quantity, current);   
    }
}
function calculateProfitAndLoss(initial, quantity, current){
    if(initial>current){
        var loss = ((initial - current) * quantity).toFixed(2);
        var lossPercent = ((loss/(initial*quantity)) * 100).toFixed(2);
        showOutput(`Hey, the loss is ${loss} and the loss percentage is ${lossPercent}%`);
        outputBox.style.color='red';
       // outputBox.innerText = `Hey, the loss is ${loss} and the loss percentage is ${lossPercent}%`;
    }else if(current>initial){
        var profit = ((current - initial) * quantity).toFixed(2);
        var profitPercent = ((profit/(initial*quantity)) * 100).toFixed(2);
        showOutput(`Hey, the profit is ${profit} and the profit percentage is ${profitPercent}%`);
        outputBox.style.color='green';
        //outputBox.innerText = `Hey, the profit is ${profit} and the profit percentage is ${profitPercent}%`;
    }else{
        showOutput(`No gain no pain and no pain no gain`);
        //outputBox.innerText = `Hey, there is no gain no pain and no pain no gain`;
    }
}

function showOutput(msg){
    outputBox.innerText = msg;
}

