// handle deposit button 
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    const deposit = document.getElementById('deposit');
    const currentDepositAmount = deposit.innerText;
    const totalDeposit = parseFloat(currentDepositAmount) + parseFloat(depositAmount);
    deposit.innerText = totalDeposit;

    //update account balace
    const balance = document.getElementById('balance');
    const currentTotalBalance = balance.innerText;
    const totalBalance = parseFloat(currentTotalBalance) + parseFloat(depositAmount);
    balance.innerText = totalBalance;
    depositInput.value = "";
})
// handle withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get the withdrawal amount 
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawAmount = withdrawInput.value;

    const withdraw = document.getElementById('withdraw');
    const currentWithdrawAmount = withdraw.innerText;
    const totalWithdraw = parseFloat(currentWithdrawAmount) + parseFloat(withdrawAmount);
    withdraw.innerText = totalWithdraw;

    // update account balace
    const balance = document.getElementById('balance');
    const currentTotalBalance = balance.innerText;
    const totalBalance = parseFloat(currentTotalBalance) - parseFloat(withdrawAmount);
    balance.innerText = totalBalance;
    withdrawInput.value = "";
})
