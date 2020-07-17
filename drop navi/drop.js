

const sellingList = document.getElementsByClassName('selling-list')[0];

const buyingList = document.getElementsByClassName('buying-list')[0];

const lettingList = document.getElementsByClassName('letting-list')[0];

const rentingList = document.getElementsByClassName('renting-list')[0];







const sellingBtn = document.getElementById('selling-select');

const buyingBtn = document.getElementById('buying-select');

const lettingBtn = document.getElementById('letting-select');

const rentingBtn = document.getElementById('renting-select');





sellingBtn.addEventListener('click', sellingDrop);

buyingBtn.addEventListener('click', buyingDrop);

lettingBtn.addEventListener('click', lettingDrop);

rentingBtn.addEventListener('click', rentingDrop);





function sellingDrop(e) {
    e.preventDefault();
    sellingList.classList.toggle('show-selling');
    buyingList.classList.remove('show-selling');
    lettingList.classList.remove('show-selling');
    rentingList.classList.remove('show-selling');
};

function buyingDrop(e) {
    e.preventDefault();
    buyingList.classList.toggle('show-selling');
    sellingList.classList.remove('show-selling');
    lettingList.classList.remove('show-selling');
    rentingList.classList.remove('show-selling');
};

function lettingDrop(e) {
    e.preventDefault();
    lettingList.classList.toggle('show-selling');
    buyingList.classList.remove('show-selling');
    sellingList.classList.remove('show-selling');
    rentingList.classList.remove('show-selling');
    
};

function rentingDrop(e) {
    e.preventDefault();
    rentingList.classList.toggle('show-selling');
    sellingList.classList.remove('show-selling');
    buyingList.classList.remove('show-selling');
    lettingList.classList.remove('show-selling');
};


