
// calculate all input feild with function 
function calculatBtn() {

    const incomeInput = document.getElementById('income_input');
    const incumInputValue = parseInt(incomeInput.value);

    const foodInput = document.getElementById('food_input');
    const foodInputValue = parseInt(foodInput.value);

    const rentInput = document.getElementById('rent_input');
    const rentInputValue = parseInt(rentInput.value);

    const clothesInput = document.getElementById('clothes_input');
    const clothesInputValue = parseInt(clothesInput.value);

    var totalExpenses = document.getElementById('total_expenses');
    var totalBalance = document.getElementById('total_balance');
    // ?error message
    const errorMessage = document.getElementById('error_id');

    if (incumInputValue < 0 || foodInputValue < 0 || rentInputValue < 0 || clothesInputValue < 0) {
        errorMessage.style.display = 'block';
    }
    else {
        errorMessage.style.display = 'none';

        const total = foodInputValue + rentInputValue + clothesInputValue;

        totalExpenses.innerText = total;

        totalBalance.innerText = incumInputValue - total;
    }
};

document.getElementById('calculate_btn').addEventListener('click', function () {
    calculatBtn();
});


// savings part

function calculateSavings() {
    let incomeInput = document.getElementById('income_input');
    let incomeInputValue = parseInt(incomeInput.value);
    let saveInput = document.getElementById('save_input');
    let saveInputValue = parseInt(saveInput.value);

    var totalBalance = document.getElementById('total_balance').innerText;

    let totalSavingBalance = document.getElementById('total_saving_balance');
    let totalCountBalance = document.getElementById('total_count_balance');


    // error meeage
    const errorMessage = document.getElementById('error_id_savings');

    if (saveInputValue < 0) {
        errorMessage.style.display = 'block';
    }
    else {
        errorMessage.style.display = 'none';

        let savedMoney = (incomeInputValue * saveInputValue) / 100;
        totalSavingBalance.innerText = savedMoney;

        let mainBalance = Number(totalBalance) - savedMoney;

        totalCountBalance.innerText = mainBalance;

    }




};

document.getElementById('saved_btn').addEventListener('click', function () {
    calculateSavings();
});