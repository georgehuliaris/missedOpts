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
