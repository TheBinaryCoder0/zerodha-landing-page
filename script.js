function calculate_return() {

    let capital = parseFloat(document.getElementById('initial-amount').value);
    let years = parseFloat(document.getElementById('number-of-years').value);
    let interest = parseFloat(document.getElementById('interest-rate').value);

    if (!isNaN(capital) && capital >= 0 && !isNaN(years) && years >= 0 && !isNaN(interest) && interest >= 0) {

        let returns = capital * ((1 + (interest / 100)) ** years);
        let profit = returns - capital;

        document.getElementById('return').innerText = `Return: ${returns.toFixed(2)}`;
        document.getElementById('profit').innerText = `Profit: ${profit.toFixed(2)}`;
    } else {

        alert("You have entered invalid values!");
        
        document.getElementById('return').innerText = `Return: -`;
        document.getElementById('profit').innerText = `Profit: -`;
    }
}
