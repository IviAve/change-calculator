const RATE = 1.95583;

const dueBGN = document.getElementById('dueBGN');
const dueEUR = document.getElementById('dueEUR');
const paidBGN = document.getElementById('paidBGN');
const paidEUR = document.getElementById('paidEUR');
const changeBGN = document.getElementById('changeBGN');
const changeEUR = document.getElementById('changeEUR');

let lastDueEdited = 'BGN';
let lastPaidEdited = 'BGN';

function calculate() {
  
  let dueTotalBGN = 0;
  if (lastDueEdited === 'BGN') {
    dueTotalBGN = Number(dueBGN.value) || 0;
  } else {
    dueTotalBGN = (Number(dueEUR.value) || 0) * RATE;
  }

  
  let paidTotalBGN = 0;
  if (lastPaidEdited === 'BGN') {
    paidTotalBGN = Number(paidBGN.value) || 0;
  } else {
    paidTotalBGN = (Number(paidEUR.value) || 0) * RATE;
  }

  const change = paidTotalBGN - dueTotalBGN;

  
  changeBGN.value = change > 0 ? change.toFixed(2) : '0.00';
  changeEUR.value = change > 0 ? (change / RATE).toFixed(2) : '0.00';
}


dueBGN.addEventListener('input', () => {
  lastDueEdited = 'BGN';
  const val = dueBGN.value ? Number(dueBGN.value) : 0;
  dueEUR.value = val ? (val / RATE).toFixed(2) : '';
  calculate();
});

dueEUR.addEventListener('input', () => {
  lastDueEdited = 'EUR';
  const val = dueEUR.value ? Number(dueEUR.value) : 0;
  dueBGN.value = val ? (val * RATE).toFixed(2) : '';
  calculate();
});


paidBGN.addEventListener('input', () => {
  lastPaidEdited = 'BGN';
  const val = paidBGN.value ? Number(paidBGN.value) : 0;
  paidEUR.value = val ? (val / RATE).toFixed(2) : '';
  calculate();
});

paidEUR.addEventListener('input', () => {
  lastPaidEdited = 'EUR';
  const val = paidEUR.value ? Number(paidEUR.value) : 0;
  paidBGN.value = val ? (val * RATE).toFixed(2) : '';
  calculate();
});

