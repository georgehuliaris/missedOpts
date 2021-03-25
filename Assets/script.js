// toggle function between crypto mode and stock mode
const checkBox = document.querySelector("input[type=checkbox]");
let body = document.body;
checkBox.addEventListener('change', function() {
    if (checkBox.checked){
      body.classList.toggle('cryptoMode');
    } else {
       body.classList.toggle('stockMode');
    }
  });


const cyrpto_btn = document.querySelector(".cyrpto_btn button");
const stock_btn = document.querySelector(".stock_btn button");
// toggles between crypto mode and stock mode 


cyrpto_btn.onclick = ()=>{
    crypto_form.classList.add("activecyrForm"); 
}

stock_btn.onclick = ()=>{
    stock_form.classList.add("activestkform");
}

var formSubmit = document.getElementById("myForm");
// this is the form submit button
document.getElementById("myForm").addEventListener("click", function (event) {
formSubmit.submit();

var input = document.querySelector('#pageToggle');

input.addEventListener('change',function(){
    if(this.checked) {
        console.log('crypto');
    } else {
        console.log('stock');
    }
});

var formSubmit = document.getElementById("myForm");
// this is the form submit button
document.getElementById("myForm").addEventListener("click", function (event) {
formSubmit.submit();

});

function bitfinData() {
    URL: "https://api-pub.bitfinex.com/v2/candles/trade:1m:tBTCUSD/hist";
}

function iexData(){
    var URL = "https://cloud.iexapis.com/v1?token=pk_95cd7c4ff00744a5a178e9fecad2319e";

    type: 'line',
    data:{
        labels:[],
        datasets:[],
    },
        options:{},

});

document.getElementById('average').onclick = async function () {

    var url = "https://cloud.iexapis.com/v1?token=pk_95cd7c4ff00744a5a178e9fecad2319e";

    var todayAvg;
    console.log(todayAvg)

    await $.get(url, function (data) {
        console.log('todays data', data)
        var open = data.open;
        var close = data.close;

        todayAvg = average(open, close);
});

    console.log('todayAvg', todayAvg)


var historicalAvg;
var endOfDayURL = "https://cloud.iexapis.com/v1?token=pk_95cd7c4ff00744a5a178e9fecad2319e";

await $.get(endOfDayURL, function (data) {

    const lastData = data[data.length - 1];
    var open = lastData.open;
    var close = lastData["close data"];


    historicalAvg = average(open, close);
});

var change = todayAvg - historicalAvg;

document.getElementById('change-result').innerHTML = change;

console.log('historicalAvg', historicalAvg)
console.log('change', change)

}

function average(a, b) {
    console.log(a, b)
    return (a + b) / 2;

}


