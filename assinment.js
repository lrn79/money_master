
// calculate all input feild with function 
function calculatBtn() {
    const incomeInput = document.getElementById('income_input');
    const incumInputValue = incomeInput.value;

    const foodInput = document.getElementById('food_input');
    const foodInputValue = foodInput.value;

    const rentInput = document.getElementById('rent_input');
    const rentInputValue = rentInput.value;

    const clothesInput = document.getElementById('clothes_input');
    const clothesInputValue = clothesInput.value;

    var totalExpenses = document.getElementById('total_expenses');
    var totalBalance = document.getElementById('total_balance');

    total = Number(foodInputValue) + Number(rentInputValue) + Number(clothesInputValue);

    totalExpenses.innerText = total;

    totalMoney = Number(incumInputValue) - total;
    totalBalance.innerText = totalMoney;




};

document.getElementById('calculate_btn').addEventListener('click', function () {
    calculatBtn();
})