


console.log('JS loaded');

const RATE = 1.95583;

const dueBGN = document.getElementById('dueBGN');
const dueEUR = document.getElementById('dueEUR');
const paidBGN = document.getElementById('paidBGN');
const paidEUR = document.getElementById('paidEUR');
const changeBGN = document.getElementById('changeBGN');
const changeEUR = document.getElementById('changeEUR');

dueBGN.addEventListener('input', () => {
  const val = Number(dueBGN.value) || 0;
  dueEUR.value = (val / RATE).toFixed(2);
  calculate();
});

paidBGN.addEventListener('input', () => {
  paidEUR.value = paidBGN.value
    ? (paidBGN.value / RATE).toFixed(2)
    : '';
  calculate();
});

paidEUR.addEventListener('input', () => {
  paidBGN.value = paidEUR.value
    ? (paidEUR.value * RATE).toFixed(2)
    : '';
  calculate();
});

function calculate() {
  const due = Number(dueBGN.value) || 0;
  const paid = Number(paidBGN.value) || 0;

  const change = paid - due;

  changeBGN.value = change.toFixed(2);
  changeEUR.value = (change / RATE).toFixed(2);
}
