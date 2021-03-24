// function toggleSwitch() {
// var element = document.getElementById('pageToggle');
// element.classList.toggle('cryptoMode');
// }

// var input = document.querySelector('#pageToggle');

// input.addEventListener('change',function(){
//     if(this.checked) {
//         console.log('crypto');
//     } else {
//         console.log('stock');
//     }
// });
// toggles between crypto mode and stock mode 
$('input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
       $('body').toggleClass('cryptoMode');
    }
    else if($(this).is(":not(:checked)")){
       console.log('deactivated');
    }
});

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

// }

// let myChart = document.getElementById("myChart").getContext("2D");
// let crypto = new chart(myChart, {

//     type: 'line',
//     data:{
//         labels:[],
//         datasets:[],
//     },
//         options:{};

// });
