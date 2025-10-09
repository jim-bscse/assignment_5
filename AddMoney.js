document.getElementById('btn-add-money1')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money1').value;
    const addMoneyNumber = parseFloat(addMoney);

    if (isNaN(addMoneyNumber) || addMoneyNumber <= 0) {
        alert('Please enter a positive amount.');
        return;
    }

    const addMoneyBadge = document.getElementById('balanceBadge1').innerText;
    const addMoneyNumberBadge = parseFloat(addMoneyBadge);
    const badgeBalance = addMoneyNumberBadge + addMoneyNumber;
    document.getElementById('balanceBadge1').innerText = badgeBalance + ' BDT';

    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber + addMoneyNumber;
    document.getElementById('account-balance').innerText = newBalance + ' BDT';

    document.getElementById('input-add-money1').value = '';
});


document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);

    if (isNaN(addMoneyNumber) || addMoneyNumber <= 0) {
        alert('Please enter a positive amount.');
        return;
    }

    const addMoneyBadge = document.getElementById('balanceBadge').innerText;
    const addMoneyNumberBadge = parseFloat(addMoneyBadge);
    const badgeBalance = addMoneyNumberBadge + addMoneyNumber;
    document.getElementById('balanceBadge').innerText = badgeBalance + ' BDT';

    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber + addMoneyNumber;
    document.getElementById('account-balance').innerText = newBalance + ' BDT';

    document.getElementById('input-add-money').value = '';
});


document.getElementById('btn-add-money2')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoney2 = document.getElementById('input-add-money2').value;
    const addMoneyNumber2 = parseFloat(addMoney2);

    if (isNaN(addMoneyNumber2) || addMoneyNumber2 <= 0) {
        alert('Please enter a positive amount.');
        return;
    }

    const addMoneyBadge2 = document.getElementById('balanceBadge2').innerText;
    const addMoneyNumberBadge2 = parseFloat(addMoneyBadge2);
    const badgeBalance2 = addMoneyNumberBadge2 + addMoneyNumber2;
    document.getElementById('balanceBadge2').innerText = badgeBalance2 + ' BDT';

    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber + addMoneyNumber2;
    document.getElementById('account-balance').innerText = newBalance + ' BDT';

    document.getElementById('input-add-money2').value = '';
});