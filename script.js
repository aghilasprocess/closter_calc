var convertBtn = document.querySelector('#convert-btn');
var salesArea = document.querySelector('#sales');
var revenueArea = document.querySelector('#revenue');
var profitArea = document.querySelector('#profit');
var costArea = document.querySelector('#cost');

convertBtn.addEventListener('click', function() {
    const devicePrice = 750 ;
    const profitOneDevice = 186 ;
    // Revenue calc
    var revenue = devicePrice * salesArea.value;
    revenueArea.innerHTML = revenue;
    // Profit calc
    var profit = profitOneDevice * salesArea.value;
    profitArea.innerHTML = profit;
    // Cost
    var cost = revenue - profit;
    costArea.innerHTML = cost;

})