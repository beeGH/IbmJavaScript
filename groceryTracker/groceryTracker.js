let gt1;
let gt2;
let gt3

function calculateTotal() {
    gt1 = parseFloat(document.getElementById('gt1').value);
    gt2 = parseFloat(document.getElementById('gt2').value);
    gt3 = parseFloat(document.getElementById('gt3').value);

    let total = gt1 + gt2 + gt3;
    document.getElementById('result').innerText = `The total amount is: ${total}`;
}
