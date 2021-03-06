//toggle function between crypto mode and stock mode
// when toggling to crypto mode it should change the body, header, and main container
// body should change background
//header should turn transparent
//main container should also turn transparent 
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});


document.getElementById('average').onclick = async function() {


    var today = new Date();
    var presentDate = "20210325";
    var histDate =document.getElementById('histDate').value;
    histDate = histDate.replaceAll("-","");
    var ticker=document.getElementById('Ticker').value;
    document.getElementById('pTick').innerHTML = ticker;

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

    console.log('todayAvg', todayAvg)


    var historicalAvg;
    var historicalURL = "https://cloud.iexapis.com/stable/stock/"+ticker+"/chart/date/"+histDate+"?token=pk_95cd7c4ff00744a5a178e9fecad2319e";

    await $.get(historicalURL, function(data) {
        console.log('historic data', data)

        const lastData = data.slice(-1).pop();
        var open = lastData.open;
        var close = lastData.close;

        historicalAvg = average(open, close);
    });

    var change = todayAvg - historicalAvg;

    change = change.toFixed(2);
    change = "$"+change;

    document.getElementById('change-result').innerHTML = change;

    console.log('historicalAvg', historicalAvg)
    console.log('change', change)

}

function average(a, b) {
    console.log("AVG:",a, b)
    return (a + b) / 2;

}