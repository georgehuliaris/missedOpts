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

}

let myChart = document.getElementById("myChart").getContext("2D");
let crypto = new chart(myChart, {

    type: 'line',
    data:{
        labels:[],
        datasets:[],
    },
        options:{},

});

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

