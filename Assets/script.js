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

    var url = "https://cloud.iexapis.com/v1?token=pk_95cd7c4ff00744a5a178e9fecad2319e";

    var todayAvg;
    console.log(todayAvg)

    await $.get(url, function(data) {
        console.log('todays data', data)
        var open = data.open;
        var close = data.close;

        todayAvg = average(open, close);
    });

    console.log('todayAvg', todayAvg)


    var historicalAvg;
    var endOfDayURL = "https://cloud.iexapis.com/v1?token=pk_95cd7c4ff00744a5a178e9fecad2319e";

    await $.get(endOfDayURL, function(data) {

        const lastData = data.slice(-1).pop();
        if (lastData) {
            var open = lastData.open;
            var close = lastData["close data"];
            historicalAvg = average(open, close);
        }
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