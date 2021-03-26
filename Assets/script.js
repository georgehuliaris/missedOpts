//toggle function between crypto mode and stock mode
// when toggling to crypto mode it should change the body, header, and main container
// body should change background
//header should turn transparent
//main container should also turn transparent 
const checkBox = document.querySelector("input[type=checkbox]");
let body = document.body;
checkBox.addEventListener('change', function() {
    if (checkBox.checked) {
        body.classList.toggle('cryptoMode');

    } else {
        body.classList.toggle('stockMode');

    }
});

var input = document.querySelector('#pageToggle');

input.addEventListener('change', function() {
    if (this.checked) {
        console.log('crypto');
    } else {
        console.log('stock');
    }
});


document.getElementById('average').onclick = async function() {

<<<<<<< HEAD
    var url = "https://cloud.iexapis.com/stable/stock/AAPL/quote?token=pk_95cd7c4ff00744a5a178e9fecad2319e";
=======
>>>>>>> f472d8a31dcd2cf757ac2699cad3ffd3dad257cf

    var today = new Date();
    var presentDate = "20210325";
    var histDate =document.getElementById('histDate').value;
    histDate = histDate.replaceAll("-","");
    var ticker=document.getElementById('Ticker').value;

    var url = "https://cloud.iexapis.com/stable/stock/"+ticker+"/chart/date/"+presentDate+"?token=pk_95cd7c4ff00744a5a178e9fecad2319e";
    var todayAvg;
    console.log(todayAvg)

    await $.get(url, function(data) {
        console.log('todays data', data)

        const lastData = data.slice(-1).pop();
        var open = lastData.open;
        var close = lastData.close;

        todayAvg = average(open, close);
    });

    console.log('todayAvg', todayAvg);

    var userSelectedDate = "20210325";


    var historicalAvg;
<<<<<<< HEAD
    var endOfDayURL = "https://cloud.iexapis.com/stable/stock/AAPL/chart/date/20210325?token=pk_95cd7c4ff00744a5a178e9fecad2319e";
=======
    var historicalURL = "https://cloud.iexapis.com/stable/stock/"+ticker+"/chart/date/"+histDate+"?token=pk_95cd7c4ff00744a5a178e9fecad2319e";
>>>>>>> f472d8a31dcd2cf757ac2699cad3ffd3dad257cf

    await $.get(historicalURL, function(data) {
        console.log('historic data', data)

        const lastData = data.slice(-1).pop();
        var open = lastData.open;
        var close = lastData.close;

        historicalAvg = average(open, close);
    });

    var change = todayAvg - historicalAvg;

    document.getElementById('change-result').innerHTML = change;

<<<<<<< HEAD
console.log('historicalAvg', historicalAvg)
console.log('change', change)
=======
    console.log('historicalAvg', historicalAvg)
    console.log('change', change)
>>>>>>> f472d8a31dcd2cf757ac2699cad3ffd3dad257cf

}

function average(a, b) {
    console.log("AVG:",a, b)
    return (a + b) / 2;

}