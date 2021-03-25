// $('input[type="checkbox"]').click(function(){
//     if($(this).is(":checked")){
//        $('body').toggleClass('cryptoMode');
//     }
//     else if($(this).is(":not(:checked)")){
//        console.log('deactivated');
//     }
// });

function toggleSwitch() {
    const checkBox = document.getElementById('pageToggle');
    const element = document.body;
    if (checkBox.checked == true) {
        element.classList.toggle('cryptoMode');
    } else {
        element.classList.toggle('stockMode');
    }
}


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

// var input = document.querySelector('#pageToggle');

// input.addEventListener('change',function(){
//     if(this.checked) {
//         console.log('crypto');
//     } else {
//         console.log('stock');
//     }
// });

// var formSubmit = document.getElementById("myForm");
// // this is the form submit button
// document.getElementById("myForm").addEventListener("click", function (event) {
// formSubmit.submit();

// });

// function bitfinData() {
//     URL: "https://api-pub.bitfinex.com/v2/candles/trade:1m:tBTCUSD/hist";
// }

// function iexData(){
//     var URL = "https://cloud.iexapis.com/v1?token=pk_95cd7c4ff00744a5a178e9fecad2319e";

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

comsole.log('historicalAvg', historicalAvg)
comsole.log('change', change)

}

function average(a, b) {
    console.log(a, b)
    return (a + b) / 2;

}


// This is just a function to average the open and close price together

// let a = ${#open};
// let b = ${#close};
// let c = ${#open};
// let d = ${#close};

// function average1(a, b) {
//     // force the input as numbers *1
// return ((a*1 + b*1) /2);
// }

// document.getElementById("averageButton").onclick = function (){
//         var a = document.getElementById("userInput1").value;
//     var b = document.getElementById("userInput2").value;    		
//     // pass the numbers to the average function!
// return(average1(a,b));
// }

// function average2(c, d) {
//     // force the input as numbers *1
// return ((c*1 + d*1) /2);
// }

// document.getElementById("averageButton").onclick = function (){
//         var a = document.getElementById("userInput1").value;
//     var b = document.getElementById("userInput2").value;    		
//     // pass the numbers to the average function!
// return(average2(c,d));
// }

// function averageDone(average1, average2) {
//     // force the input as numbers *1
// return ((average1*1 + average2*1) /2);
// }

// document.getElementById("averageButton").onclick = function (){
//         var a = document.getElementById("userInput1").value;
//     var b = document.getElementById("userInput2").value;    		
//     // pass the numbers to the average function!
// return(averageDone(average1,average2));
// }


