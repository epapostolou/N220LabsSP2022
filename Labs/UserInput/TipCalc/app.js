let txtInput = document.getElementById("txtInput");
let dvResult = document.getElementById("result");

function generateContent() {
    let userBill = parseInt(txtInput.value);
    let userTip = userBill * .2;
    userTip = Math.round(userTip * 100) / 100;

    let userTotal = userBill + userTip;
    userTotal = Math.round(userTotal * 100) / 100;
    userTip = userTip.toFixed(2);
    userTotal = userTotal.toFixed(2);
    let val = `Tip: $${userTip}. Total: $${userTotal}.`;
    dvResult.innerHTML = val;
    console.log(val);
    txtInput.value = "";
}

document.body.appendChild(dvResult);