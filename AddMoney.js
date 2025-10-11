function getBDTimeString() {
    const bdTime = new Date();
    bdTime.setHours(bdTime.getUTCHours() + 6);
    return bdTime.toLocaleString('en-US',{timeZone: 'Asia/Dhaka'}) + ' GMT + 0600 (Bangladesh Standard Time)';
}

function addHistory(amount, purpose) {
    const historyList = document.getElementById('history-list');
    const historyItem = document.createElement('div');
    historyItem.className = "bg-white p-6 px-8 rounded-xl border border-gray-200";
    historyItem.innerHTML = `
        <div class="font-bold text-lg mb-2">${amount} Taka is Donated for ${purpose}</div>
        <div class="text-gray-500 text-sm">Date: ${getBDTimeString()}</div>
    `;
    historyList.prepend(historyItem);
}

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

    addHistory(addMoneyNumber, "Flood at Noakhali, Bangladesh");

    document.getElementById('input-add-money1').value = '';
    document.getElementById('my_modal_6').checked = true;
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

    addHistory(addMoneyNumber, "Aid for Injured in the Quota Movement");

    document.getElementById('input-add-money').value = '';
    document.getElementById('my_modal_6').checked = true;
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

    addHistory(addMoneyNumber2, "Flood Relief in Feni, Bangladesh");

    document.getElementById('input-add-money2').value = '';
    document.getElementById('my_modal_6').checked = true;
});

// Tab switch er code
document.getElementById('donation-tab').addEventListener('click', function() {
    document.getElementById('donation-page').classList.remove('hidden');
    document.getElementById('history-page').classList.add('hidden');
    this.classList.add('bg-[#B4F461]', 'text-black');
    this.classList.remove('bg-white', 'border', 'border-gray-300', 'text-black');
    document.getElementById('history-tab').classList.remove('bg-[#B4F461]');
    document.getElementById('history-tab').classList.add('bg-white', 'border', 'border-gray-300', 'text-black');
});

document.getElementById('history-tab').addEventListener('click', function() {
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history-page').classList.remove('hidden');
    this.classList.add('bg-[#B4F461]', 'text-black');
    this.classList.remove('bg-white', 'border', 'border-gray-300', 'text-black');
    document.getElementById('donation-tab').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-tab').classList.add('bg-white', 'border', 'border-gray-300', 'text-black');
});

